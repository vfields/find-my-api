import cypress from "cypress";

describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('display all expected elements to DOM on page load', () => {
    cy.get('img').should('exist');
    cy.get('.header-text').should('exist').contains('Find My API');
    cy.get('.tag-text').should('exist').contains('Bootcamps are hard enough.Finding an API should be easier!');
    cy.get('.sub-tag-text').should('exist').contains('Search over 1,000+ free, public APIs by keyword, category, authentication requirements, and more.');
    cy.get('.get-started-btn').should('exist').contains('Get Started');
    cy.get('.break-btn').should('exist').contains('Take A Break');
  });

  it('user should be able to navigate to search page', () => {
    cy.get('.get-started-btn').click();
    cy.url().should('eq', 'http://localhost:3000/home');
  });

  it('user should be able to navigate to break page', () => {
    cy.get('.break-btn').click();
    cy.url().should('eq', 'http://localhost:3000/break');
  });
})