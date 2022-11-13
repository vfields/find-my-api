import cypress from 'cypress';

describe('Bad url handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/banana')
  });

  it('Should be able to handle a bad url', () => {
    cy.get('.bad-url-header').should('exist').contains(`We can help you find an API, but we can't find that page anywhere!`);
    cy.get('.bad-url-gif').should('exist');
    cy.get('.bad-url-tag').should('exist').contains(`Looks like an invalid URL. Try going home or a different address!`);
  });

  it('Should link the user home', () => {
    cy.get('.bad-url-tag > a').click();
    cy.url().should('eq', 'http://localhost:3000/home')
  });
})