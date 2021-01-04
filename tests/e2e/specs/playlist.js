const slide = percentFromLeft => subject => {
  const pixelsFromLeft = percentFromLeft * Cypress.config("viewportWidth");
  cy.wrap(subject).parent().find('div[role=slider]')
      .trigger('mousedown', { which: 1, force: true })
      .trigger('mousemove', { clientX: pixelsFromLeft, force: true })
      .trigger('mouseup', {force: true});
}

const slider = (txt) => {
  const prob = cy.contains(txt);
  prob.scrollIntoView();
  prob.should('be.visible');
  return prob.next().find('input');
}

const KEY = 'TestApiKeyIsNotSecret';
describe('Test playlist', () => {
  const getStore = () => cy.window().its('app.$store');
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
    cy.url().should('include', '/import');
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
      url: 'https://youtube.googleapis.com/youtube/v3/playlists'
    }, {
      fixture: 'playlists.json'
    }).as('ytPLaylist');

    const itemQ = {
      key: KEY,
      playlistId: TEST_ID,
      part: 'snippet,contentDetails',
      fields: 'items/snippet(title,description),nextPageToken',
      maxResults: '50',
    };
    cy.intercept({
      query: {...itemQ, pageToken: 'nextPageXYZ'},
      url: 'https://youtube.googleapis.com/youtube/v3/playlistItems'
    }, { fixture: 'playlistItems2.json' }).as('page2');
    cy.intercept({
      query: itemQ,
      url: 'https://youtube.googleapis.com/youtube/v3/playlistItems'
    }, { fixture: 'playlistItems.json' }).as('page1');

    cy.get('input').type('https://youtube.com/?list=PL_as-fsdaf');
    cy.contains('button', 'Import YouTube Playlist').should('be.visible').should('not.be.disabled').click();
    cy.wait(['@ytPLaylist', '@page1', '@page2']);
    cy.contains('button', 'Test Playlist Title');
    for (let [title, author] of [['Song Title 1', 'Music Author 1'], ['Piece Title 2', 'Classical Author 2'], ['Rock Song 3', 'Rock Author 3.1 & Opera Singer 3.2'], ['Cover Title 4', 'Cover Author 4']]) {
      cy.contains(title).parentsUntil('tr').last().next().contains(author);
    }
  });
});
