// https://docs.cypress.io/api/introduction/api.html

describe('Check tutorial', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('welcome to Hot Minute. This tutorial will guide you');
    cy.get('.tutorial-navigation > .skip-tutorial').should('be.visible').contains('Skip tutorial');
    cy.get('.tutorial-navigation > .primary').should('be.visible').contains('Start');
  });
});
