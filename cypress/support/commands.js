Cypress.Commands.add('accessarPaginaCadastro', () => {
    cy.visit('/')

    cy.get('.logo > img').should('be.visible')
    cy.get('.fa-lock').click()
    cy.get('#user').should('be.visible')
})