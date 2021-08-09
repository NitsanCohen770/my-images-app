before(() => {
  cy.visit('http://localhost:3000/');
  cy.waitForReact();
});

it('Click on the Add Image, search for sunshine image, and add the two first results to the favorite list. Go back to the home page and verify that it contains the two images.', () => {
  cy.react('ImageViewer').click();
  cy.get('input').type('sunshine');
  cy.get('[data-cy="search-button"]').click();
  cy.react('ImageViewer').first().click('center');
  cy.react('ImageViewer').eq(1).click('center');
  cy.get('[data-cy="back-button"]').click();
  cy.react('ImageViewer').first().should('be.visible');
  cy.react('ImageViewer').eq(1).should('be.visible');
});
