Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

before(() => {
  cy.visit('http://localhost:3000/');
  cy.waitForReact();
});

describe('This is an E2E test to check the flow of the app.', () => {
  it('Should navigate to the Search page by clicking the add image button', () => {
    cy.react('ImageViewer').click();
  });

  it('Should write sunshine in the input box and search by clicking on the search button', () => {
    cy.get('input').type('sunshine');
    cy.get('[data-cy="search-button"]').click();
  });

  it('Click on the first 2 images and add them to my images.', () => {
    cy.react('ImageViewer').first().click('center');
    cy.react('ImageViewer').eq(1).click('center');
  });

  it('Should navigate back to the homepage and check if the added images are there.', () => {
    cy.get('[data-cy="back-button"]', { timeout: 10000 }).click();
    cy.react('ImageViewer').first().should('be.visible');
    cy.react('ImageViewer').eq(1).should('be.visible');
  });
});
