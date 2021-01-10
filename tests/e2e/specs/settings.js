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

describe('Test probablity', () => {
  it('Skips tutorial', () => {
    cy.visit('/');
    cy.get('.tutorial-navigation > .skip-tutorial').click();
    cy.get('.tutorial > .v-overlay').should('not.exist');
  });

  it('Reduces animation length to 0', () => {
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible').click();
    const txt = 'Activity selection animation length';
    slider(txt).should('have.value', '10');
    slider(txt).then(slide(0));
    slider(txt).should('have.value', '0');
  });

  it('Sets humming bomb probablity to 0', () => {
    const txt = 'Probability of humming bomb';
    slider(txt).should('have.value', '0.15');
    slider(txt).then(slide(0));
    slider(txt).should('have.value', '0');
  });

  it('Starts games without bomb', () => {
    cy.get('#home').should('be.visible').click();
    for (let i = 0; i < 4; i++) {
      cy.get('.outer.play').should('be.visible').click();
      cy.url().should('match', /play\/(draw|show|speak)/);
      cy.go('back');
    }
  });

  it('Sets humming bomb probablity to 1', () => {
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible').click();
    const txt = 'Probability of humming bomb';
    slider(txt).should('have.value', '0');
    slider(txt).then(slide(1));
    slider(txt).should('have.value', '1');
  });

  it('Starts only bomb games', () => {
    cy.get('#home').should('be.visible').click();
    for (let i = 0; i < 4; i++) {
      cy.get('.outer.play').should('be.visible').click();
      cy.url().should('include', 'play/bomb');
      cy.go('back');
    }
  });
});

describe('Test animation length', () => {
  const timer = 0;
  it('Skips tutorial', () => {
    cy.visit('/');
    cy.get('.tutorial-navigation > .skip-tutorial').click();
    cy.get('.tutorial > .v-overlay').should('not.exist');
  });

  it('Reduces animation length to 0', () => {
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible').click();
    const txt = 'Activity selection animation length';
    slider(txt).should('have.value', '10');
    slider(txt).then(slide(0));
    slider(txt).should('have.value', '0');
  });

  it('Starts games without animation', () => {
    cy.get('#home').should('be.visible').click();
    const startTime = new Date();
    cy.get('.outer.play').should('be.visible').click().then(() => {
      cy.url().should('match', /play\/(draw|show|speak|bomb)/).then(() => {
        const endTime = new Date();
        cy.wrap(endTime - startTime).should('be.lessThan', 5000);
        cy.go('back');
      });
    });
  });

  it('Increse animation length to 20', () => {
    cy.get('.top a[aria-label="Settings"][href="/settings"]').should('be.visible').click();
    const txt = 'Activity selection animation length';
    slider(txt).should('have.value', '0');
    slider(txt).then(slide(1));
    slider(txt).should('have.value', '20');
  });

  it('Starts games with long animation', () => {
    cy.get('#home').should('be.visible').click();
    const startTime = new Date();
    cy.get('.outer.play').should('be.visible').click().then(() => {
      cy.url({ timeout: 20000 }).should('match', /play\/(draw|show|speak|bomb)/).then(() => {
        const endTime = new Date();
        cy.wrap(endTime - startTime).should('be.greaterThan', 10000);
        cy.go('back');
      });
    });
  });
});
