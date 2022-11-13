import cypress from "cypress";

describe('Break page', () => {
  it('should display all expected elements to the DOM on page load', () => {
    cy.intercept('GET', 'https://random.dog/woof.json', {
      statusCode: 200,
      ok: true,
      fixture: 'dogImgUrl'
    });
    cy.visit('http://localhost:3000/break');
    cy.get('.main-navigation').should('exist');
    cy.get('.break-header').should('exist').contains(`Bootcamps are hard. It's okay to take a break!`);
    cy.get('.img-dog-display').should('exist');
    cy.get('.encourage-msg').should('exist').contains('We hope these pups lift your spirits. You got this!');
    cy.get('.new-dog-btn').should('exist').contains('New Doggo!');
  });

  it('should be handle to handle .mp4 files', () => {
    cy.intercept('GET', 'https://random.dog/woof.json', {
      statusCode: 200,
      ok: true,
      fixture: 'dogMp4Url'
    });
    cy.visit('http://localhost:3000/break');
    cy.get('.vid-dog-display').should('exist');
  });

  it('should display a new dog image or video when button is clicked', () => {
    cy.visit('http://localhost:3000/break');
    cy.intercept('GET', 'https://random.dog/woof.json', {
      statusCode: 200,
      ok: true,
      fixture: 'dogImgUrl'
    }).as('newDogRequest');
    cy.get('.new-dog-btn').click();
    cy.wait('@newDogRequest');
    cy.get('.img-dog-display').should('have.attr', 'src').should('include', 'https://random.dog/15cde4c5-5208-4e31-aa11-cc4853893392.jpg')
  });

  it('should display a message to the user if the GET request fails', () => {
    cy.intercept('GET', 'https://random.dog/woof.json', {
      statusCode: 404,
      ok: false
    });
    cy.visit('http://localhost:3000/break');
    cy.get('.error').should('exist').contains(`Uh oh, that's a 404! We're sorry, we're having trouble displaying the doggos. Please refresh and try again!`);
 });

});