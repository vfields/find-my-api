import cypress from 'cypress';

describe('Saved page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.publicapis.org/entries', {
      statusCode: 200,
      ok: true,
      fixture: 'mockApis'
    });
    cy.visit('http://localhost:3000/home');
  });

  it('should display only a message to user if they have no saved APIs', () => {
    cy.get('.saved').click();
    cy.get('.no-saved-text').should('exist').contains(`You haven't saved any APIs, yet!`);
    cy.get('.saved-search').should('not.exist');
    cy.get('.api-card').should('not.exist');
  });

  it('should display only saved APIs and search bar if user has saved APIs', () => {
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').click();
    cy.get('.saved').click();
    cy.get('#AdoptAPet_6_Resource').contains('AdoptAPet')
  });

  it('user should be able to delete a saved API', () => {
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').click();
    cy.get('.saved').click();
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').click();
    cy.get('#AdoptAPet_6_Resource').should('not.exist');
  });

  it('user should be able to search saved APIs by keyword', () => {
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').click();
    cy.get('#Catass_8_Cat').find('.manage-save-btn').click();
    cy.get('.saved').click();
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
    cy.get('.saved-search').type('adopt');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('not.exist');
  });

  it('should display a message to user when no saved APIs match their query', () => {
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').click();
    cy.get('.saved').click();
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('.saved-search').type('elephant');
    cy.get('#AdoptAPet_6_Resource').should('not.exist');
    cy.get('.no-match-msg').should('exist').contains('None of your saved APIs contain those keywords... try searching something different!');
  });
});