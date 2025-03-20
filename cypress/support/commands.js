Cypress.Commands.add('accessarPaginaCadastro', () => {
    cy.visit('/')

    cy.get('.logo > img').should('be.visible')
    cy.get('.fa-lock').click()
    cy.get('#user').should('be.visible')
})

Cypress.Commands.add('accessarPaginaFinalizaCompra', () => {
    cy.visit('/')

    cy.get('.logo > img').should('be.visible')
    cy.get('.footer_one_widget')
        .contains('a', 'Checkout View One')
        .should('be.visible')
        .first()
        .click()
    cy.get('#fname').should('be.visible')
})