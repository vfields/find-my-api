import cypress from 'cypress';

describe('navigation bar', () => {
  it('display expected elements to the DOM on load', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('.main-navigation').should('exist');
    cy.get('.logo-text').should('exist').contains('Find My API');
    cy.get('.home').should('exist').contains('Home');
    cy.get('.saved').should('exist').contains('Saved');
    cy.get('.break').should('exist').contains('Break');
    cy.get('.logo-img').should('exist');
  });

  it('should allow user to navigate to saved', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('.saved').click();
    cy.url().should('eq', 'http://localhost:3000/saved');
  });

  it('should allow user to navigate to break', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('.break').click();
    cy.url().should('eq', 'http://localhost:3000/break');
  });

  it('should allow user to navigate to home', () => {
    cy.visit('http://localhost:3000/saved');
    cy.get('.home').click();
    cy.url().should('eq', 'http://localhost:3000/home');
  });

  it('should allow user to navigate to landing page', () => {
    cy.visit('http://localhost:3000/saved');
    cy.get('.logo-img').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
})

describe('home page', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})