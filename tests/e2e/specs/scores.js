describe('Test scores', () => {
  it('Skips tutorial', () => {
    cy.visit('/');
    cy.get('.tutorial-navigation > .skip-tutorial').click();
    cy.get('.tutorial > .v-overlay').should('not.exist');
  });

  it('Checks the score section exists but is empty', () => {
    cy.contains('h1 span', 'Keep Score').should('be.visible');
    cy.get('.score-input').should('not.exist');
    cy.get('.toolbox').should('not.exist');
    cy.get('.empty-pad button.v-btn--fab:visible').should('have.length', 1).contains('+')
  });

  it('Adds a single team to the scoreboard', () => {
    cy.get('.empty-pad button.v-btn--fab:visible').click();
    cy.contains('h1 span', 'Team 1').should('be.visible');
    cy.get('.score-input input').should('be.visible').should('have.value', '0');
    cy.contains('.toolbox button', '+3').should('be.visible');
    cy.contains('.toolbox button', '+5').should('be.visible');
    cy.get('.toolbox button i.mdi-undo').should('be.visible');
  });

  it('Tests the toolbox buttons', () => {
    cy.get('.score-input input').should('be.visible').should('have.value', '0');
    cy.contains('.toolbox button', '+3').should('be.visible').click();
    cy.get('.score-input input').should('be.visible').should('have.value', '3');
    cy.contains('.toolbox button', '+5').should('be.visible').click();
    cy.get('.score-input input').should('be.visible').should('have.value', '8');
    cy.get('.toolbox button i.mdi-undo').should('be.visible').click();
    cy.get('.score-input input').should('be.visible').should('have.value', '3');
  });

  it('Changes the team name', () => {
    cy.contains('h1 span', 'Team 1').should('be.visible').find('button').click();
    cy.contains('.v-card__title', 'Team 1').should('be.visible');
    cy.contains('button.primary', 'Delete').should('be.visible');
    cy.contains('button.primary--text', 'Done').should('be.visible');
    cy.get('.v-card input').should('have.value', 'Team 1').clear().type('Test team name');
    cy.contains('.v-card__title', 'Test team name').should('be.visible');
    cy.contains('button.primary--text', 'Done').should('be.visible').click();
    cy.contains('h1 span', 'Test team name').should('be.visible');
  });

  it('Deletes a team', () => {
    cy.contains('h1 span', 'Test team name').should('be.visible').find('button').click();
    cy.contains('button.primary', 'Delete').should('be.visible').click();
    cy.contains('h1 span', 'Keep Score').should('be.visible');
    cy.get('.score-input').should('not.exist');
    cy.get('.toolbox').should('not.exist');
    cy.get('.empty-pad button.v-btn--fab:visible').should('have.length', 1).contains('+')
  });
});