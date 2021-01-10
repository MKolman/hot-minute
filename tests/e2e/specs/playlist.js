const slide = (percentFromLeft) => (subject) => {
  const pixelsFromLeft = percentFromLeft * Cypress.config('viewportWidth');
  cy.wrap(subject).parent().find('div[role=slider]')
    .trigger('mousedown', { which: 1, force: true })
    .trigger('mousemove', { clientX: pixelsFromLeft, force: true })
    .trigger('mouseup', { force: true });
};

const slider = (txt) => {
  const prob = cy.contains(txt);
  prob.scrollIntoView();
  prob.should('be.visible');
  return prob.next().find('input');
};
const IMPORTED_MUSIC = [['Song Title 1', 'Music Author 1'], ['Piece Title 2', 'Classical Author 2'], ['Rock Song 3', 'Rock Author 3.1 & Opera Singer 3.2'], ['Cover Title 4', 'Cover Author 4']];
const KEY = 'TestApiKeyIsNotSecret';
describe('Test playlist', () => {
  it('Skips tutorial', () => {
    cy.visit('/');
    cy.get('.tutorial-navigation > .skip-tutorial').click();
    cy.get('.tutorial > .v-overlay').should('not.exist');
  });

  it('Sets animation length to 0 and bomb probability to 1', () => {
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible').click();
    const aniTxt = 'Activity selection animation length';
    slider(aniTxt).should('have.value', '10');
    slider(aniTxt).then(slide(0));
    slider(aniTxt).should('have.value', '0');
    const probTxt = 'Probability';
    slider(probTxt).should('have.value', '0.15');
    slider(probTxt).then(slide(1));
    slider(probTxt).should('have.value', '1');
  });

  it('Goes to playlist import page', () => {
    cy.contains('.v-btn', 'Add playlist').should('be.visible').click();
    cy.location('pathname').should('eq', '/import');
    cy.contains('h1', 'Custom playlists').should('be.visible');
    cy.contains('button', 'Import new playlist').should('be.visible');
    cy.contains('button', 'Import YouTube Playlist').should('be.visible').should('be.disabled');
  });

  it('Imports a playlist', () => {
    const TEST_ID = 'PL_as-fsdaf';
    cy.intercept({
      query: {
        key: KEY,
        id: TEST_ID,
        part: 'snippet',
        fields: 'items/snippet/title',
      },
      url: 'https://youtube.googleapis.com/youtube/v3/playlists',
    }, {
      fixture: 'playlists.json',
    }).as('ytPLaylist');

    const itemQ = {
      key: KEY,
      playlistId: TEST_ID,
      part: 'snippet,contentDetails',
      fields: 'items/snippet(title,description),nextPageToken',
      maxResults: '50',
    };
    cy.intercept({
      query: { ...itemQ, pageToken: 'nextPageXYZ' },
      url: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
    }, { fixture: 'playlistItems2.json' }).as('page2');
    cy.intercept({
      query: itemQ,
      url: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
    }, { fixture: 'playlistItems.json' }).as('page1');

    cy.get('input').type('https://youtube.com/?list=PL_as-fsdaf');
    cy.contains('button', 'Import YouTube Playlist').should('be.visible').should('not.be.disabled').click();
    cy.wait(['@ytPLaylist', '@page1', '@page2']);
    cy.contains('button', 'Test Playlist Title');
    for (const [title, author] of IMPORTED_MUSIC) {
      cy.contains(title).parentsUntil('tr').last().next()
        .contains(author);
    }
  });

  it('Sets the imported playlist as the only song', () => {
    cy.go('back');
    cy.location('pathname').should('eq', '/settings');

    const getNode = (txt) => cy.contains('.v-treeview .v-treeview-node__content', txt);
    getNode('Test Playlist Title').should('not.exist');
    getNode('Songs').prev().should('have.class', 'v-treeview-node__checkbox').should('have.class', 'mdi-minus-box')
      .should('be.visible');
    getNode('Songs').click();
    getNode('Test Playlist Title').should('be.visible').prev().should('have.class', 'mdi-checkbox-marked');
    getNode('Songs').prev().click().should('have.class', 'mdi-checkbox-marked');
    getNode('Test Playlist Title').should('be.visible').prev().should('have.class', 'mdi-checkbox-marked');
    getNode('Test Playlist Title').prev().click().should('have.class', 'mdi-checkbox-blank-outline');
    getNode('Test Playlist Title').prev().click().should('have.class', 'mdi-checkbox-marked');
    getNode('Songs').prev().click().should('have.class', 'mdi-minus-box');
    getNode('Test Playlist Title').prev().click().should('have.class', 'mdi-checkbox-marked');
    getNode('Songs').parent().next().should('have.class', 'v-treeview-node__children')
      .should('be.visible');
    getNode('Songs').parent().next().find('.mdi-checkbox-marked')
      .should('have.length', 1);
    getNode('Songs').parent().next().find('.mdi-minus-box')
      .should('have.length', 0);
  });

  it('Checks the selection is made from the imported playlist', () => {
    cy.get('#home').should('be.visible').click();
    for (let i = 0; i < 3; i++) {
      cy.location('pathname').should('eq', '/');
      cy.get('.play.outer').should('be.visible').click();
      cy.location('pathname').should('eq', '/selector');
      cy.location('pathname').should('eq', '/play/bomb');
      cy.get('.bomb-text', { timeout: 10000 }).then((el) => {
        cy.log(el);
        el = el[0];
        cy.wrap(el.children[0]).should('have.class', 'song-author');
        cy.wrap(el.children[1]).should('have.class', 'song-title');
        const songs = Object.fromEntries(IMPORTED_MUSIC);
        const author = el.children[0].textContent.trim();
        const title = el.children[1].textContent.trim();
        expect(songs).to.have.any.key(title);
        expect(songs[title]).to.eq(author);
      });
      cy.go('back');
    }
  });
});
