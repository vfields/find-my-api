import cypress from 'cypress';

describe('Navigation bar', () => {
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
});

describe('Search options', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.publicapis.org/entries', {
      statusCode: 200,
      ok: true,
      fixture: 'mockApis'
    });
  })

  it('should display expected elements to the DOM on page load', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('.select-category-dropdown').should('exist');
    cy.get('.keyword-input').should('exist');
    cy.get('.auth-radio-container').should('exist').contains('Authentication');
    cy.get('.https-radio-container').should('exist').contains('HTTPS');
    cy.get('.cors-radio-container').should('exist').contains('CORS');
    cy.get('.clear-search-btn').should('exist').should('have.attr', 'disabled');
  });

  it('should display fetched categories inside of category dropdown', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.select-category-dropdown').click();
    cy.get('.category-dropdown-display').should('exist').should('contain', 'Animals').and('contain', 'Books').and('contain', 'Music');
  });

  it('should display an error message if the category fetch fails', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 404,
      ok: false
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.select-category-dropdown').click();
    cy.get('.error').should('exist').contains(`Oops, that's a 404! Something went wrong loading the categories... please try again later.`);
  });

  it('should display categories as user selects them', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.select-category-dropdown').click();
    cy.get('.category-dropdown-display > :nth-child(1)').click();
    cy.get('#Animals_0').should('exist');
  });

  it('should allow a user to delete category elements as a search option', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
    cy.get('.select-category-dropdown').click();
    cy.get('.category-dropdown-display > :nth-child(2)').click();
    cy.get('#AdoptAPet_6_Resource').should('not.exist');
    cy.get('#Catass_8_Cat').should('not.exist');
    cy.get('#Books_0').click();
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
  });

  it('should allow a user to search by keyword', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
    cy.get('.keyword-input').type('adopt');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('not.exist');
  });

  it('should allow a user to search by authentication', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
    cy.get('.auth-radio-container > :nth-child(3)').click();
    cy.get('#AdoptAPet_6_Resource').should('not.exist');
    cy.get('#Catass_8_Cat').should('exist');
  });

  it('should allow a user to search by HTTPS', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
    cy.get('.https-radio-container > :nth-child(3)').click();
    cy.get('#AdoptAPet_6_Resource').should('not.exist');
    cy.get('#Catass_8_Cat').should('not.exist');
    cy.get('.apis-remain-text').contains('No APIs match your search!');
  });

  it('should allow a user to search by CORS', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
    cy.get('.cors-radio-container > :nth-child(3)').click();
    cy.get('#AdoptAPet_6_Resource').should('not.exist');
    cy.get('#Catass_8_Cat').should('exist');
  });

  it('should allow a user to clear their search once a value is inputed', () => {
    cy.intercept('GET', 'https://api.publicapis.org/categories', {
      statusCode: 200,
      ok: true,
      fixture: 'mockCategories'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.clear-search-btn').should('have.attr', 'disabled');
    cy.get('.keyword-input').type('cat');
    cy.get('.clear-search-btn').should('not.have.attr', 'disabled');
    cy.get('.clear-search-btn').click();
    cy.get('.keyword-input').should('not.have.text', 'cat');
    cy.get('.clear-search-btn').should('have.attr', 'disabled');
  });
});

describe('API container/display', () => {
  it('should display expected elements to the DOM on page load', () => {
    cy.intercept('GET', 'https://api.publicapis.org/entries', {
      statusCode: 200,
      ok: true,
      fixture: 'mockApis'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.apis-remain-text').should('exist').contains('2 APIs Remain...');
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#Catass_8_Cat').should('exist');
  });

  it('text display should change if number of APIs on the DOM changes', () => {
    cy.intercept('GET', 'https://api.publicapis.org/entries', {
      statusCode: 200,
      ok: true,
      fixture: 'mockApis'
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.apis-remain-text').contains('2 APIs Remain...');
    cy.get('.keyword-input').type('adopt');
    cy.get('.apis-remain-text').contains('1 API Remains...');
  });

  it('should display an error message if the GET request fails', () => {
    cy.intercept('GET', 'https://api.publicapis.org/entries', {
      statusCode: 404,
      ok: false
    });
    cy.visit('http://localhost:3000/home');
    cy.get('.error').should('exist').contains(`Oops, that's a 404! Something went wrong loading the APIs... please try again later.`);
    cy.get('.apis-remain-text').should('not.exist');
  });

});

describe('API card', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.publicapis.org/entries', {
      statusCode: 200,
      ok: true,
      fixture: 'mockApis'
    });
    cy.visit('http://localhost:3000/home');
  });

  it('should display expected elements to the DOM on page load', () => {
    cy.get('#AdoptAPet_6_Resource').should('exist');
    cy.get('#AdoptAPet_6_Resource > .card-title').should('exist').contains('AdoptAPet');
    cy.get('#AdoptAPet_6_Resource > .card-description').should('exist').contains('Resource to help get pets adopted');
    cy.get('#AdoptAPet_6_Resource > .card-link').should('exist').should('have.attr', 'href').should('include', 'https://www.adoptapet.com/public/apis/pet_list.html');
    cy.get('#AdoptAPet_6_Resource > .card-auth').should('exist').contains('Authentication: apiKey');
    cy.get('#AdoptAPet_6_Resource > .card-https').should('exist').contains('HTTPS: yes');
    cy.get('#AdoptAPet_6_Resource > .card-cors').should('exist').contains('CORS: yes');
    cy.get('#AdoptAPet_6_Resource > .card-category').should('exist').contains('Category: Animals');
  });

  it('should link to the display APIs docs', () => {
    cy.get('#AdoptAPet_6_Resource').find('.card-link').then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    });
  });

  it('button text should update according to whether or not API is saved', () => {
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').contains('Save This API').click();
    cy.get('#AdoptAPet_6_Resource').find('.manage-save-btn').contains('Remove From Saved');
  });

});