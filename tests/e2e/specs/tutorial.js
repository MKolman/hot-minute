// https://docs.cypress.io/api/introduction/api.html

describe('Check tutorial', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('welcome to Hot Minute. This tutorial will guide you');
    cy.get('.tutorial .v-overlay').should('be.visible');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
  });
  it('Starts the tutorial', () => {
    cy.visit('/');
    cy.get('.tutorial-navigation > .primary').contains('Start').click();
    cy.contains('Start your turn by pressing the Play button');
    cy.get('.outer').should('be.visible').contains('Play');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').contains('Pick activity').click();
  });
  it('Picks an activity', () => {
    cy.url().should('include', '/selector');
    cy.contains('explain to your teammates');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.outer.speak').should('be.visible').contains('Speak');
    cy.get('.tutorial-navigation > .primary').contains('Show word').click();

    cy.url().should('include', '/play/speak');
    cy.contains('phrase your team has to guess');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
  });
  it('Hides and shows card', () => {
    // Test hide/show button
    cy.get('.outer.speak.front').should('be.visible').then(($card) => {
      const text = $card.text();
      expect(text).to.match(/[a-zA-z '-]{3}/);
      cy.get('.outer.speak.back').should('not.be.visible');
      // Hide card
      cy.get('.v-btn.eye').should('be.visible').click();
      cy.get('.outer.speak.front').should('not.be.visible');
      cy.get('.outer.speak.back').should('be.visible');
      cy.contains(text).should('not.be.visible');
      // Show card
      cy.get('.v-btn.eye').should('be.visible').click();
      cy.get('.outer.speak.front').should('be.visible').contains(text);
      cy.get('.outer.speak.back').should('not.be.visible');
    });
  });
  it('Checks all activity explainations', () => {
    cy.get('.tutorial-navigation > .primary').contains('Next').click();

    cy.url().should('include', '/play/speak');
    cy.contains('give you one minute');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('button.ready.v-btn').should('be.visible').contains('I\'m ready!');
    cy.get('.tutorial-navigation > .primary').contains('Next').click();

    cy.url().should('include', '/play/speak');
    cy.contains('h1', 'Speak').should('be.visible');
    cy.contains('not allowed to gesture or point with your hands');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').contains('Explain Draw').click();

    cy.url().should('include', '/play/draw');
    cy.contains('h1', 'Draw').should('be.visible');
    cy.contains('not allowed to make any sounds or gestures');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').contains('Explain Show').click();

    cy.url().should('include', '/play/show');
    cy.contains('h1', 'Show').should('be.visible');
    cy.contains('not allowed to make sounds');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').contains('Next').click();

    cy.url().should('include', '/play/bomb');
    cy.contains('span.song-author', 'Queen').should('be.visible');
    cy.contains('span.song-title', 'We will rock you').should('be.visible');
    cy.contains('You have to humm the given song');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').contains('Scoring').click();
  });
  it('Learns about scoring and settings', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.contains('Get 50 points to win');
    cy.contains('#score h1 span', 'Keep Score').should('be.visible');
    cy.contains('#score button.v-btn.v-btn--fab', '+').should('be.visible');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').contains('Next').click();


    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.contains('go to settings to');
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible');
  });
  it('Finishes tutorial', () => {
    cy.get('.tutorial-navigation > .skip-tutorial').should('not.be.visible');
    cy.get('.tutorial .v-overlay').should('be.visible');
    cy.get('.tutorial-navigation > .primary').contains('Done').click();
    cy.get('.tutorial .v-overlay').should('not.be.visible');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });
  it('Restarts tutorial', () => {
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible').click();
    cy.url().should('include', '/settings');
    const tutorial = cy.contains('Restart the tutorial');
    tutorial.scrollIntoView().should('be.visible');
    tutorial.get('button').contains('Start').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.get('.tutorial .v-overlay').should('be.visible');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible');
  });
  it('Skips tutorial', () => {
    cy.get('.tutorial .v-overlay').should('be.visible');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').click();
    cy.get('.tutorial .v-overlay').should('not.be.visible');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });
});
