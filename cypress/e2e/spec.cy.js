describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
    cy.get('h1').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1').should('have.text', 'Utilities');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(3) > a').click();
    cy.get('h1').should('have.text', 'Cypress API');
    /* ==== End Cypress Studio ==== */
  })
})