describe("Finalização da compra - Validação de erros no faturamento", () => {

    const elementos = {
        buttons: {
            save: `button.theme-btn-one:contains('Save')`
        },
        messages: {
            error: '.errorLabel',
        }
    }

    beforeEach(() => {
        cy.accessarPaginaFinalizaCompra()
    });

    it("Deve exibir todas as mensagens de erro ao tentar finalizar faturamento sem preencher os campos", () => {
        const mensagensEsperadas = [
            'O campo First Name deve ser prenchido',
            'O campo Last Name deve ser prenchido',
            'O campo Company deve ser prenchido',
            'O campo E-mail deve ser prenchido ou é inválido',
            'O campo Country deve ser prenchido',
            'O campo City deve ser prenchido',
            'O campo Zip Code deve ser prenchido',
            'O campo Address deve ser prenchido',
            'O campo Additional Notes deve ser prenchido',
        ]

        cy.get(elementos.buttons.save)
            .should('be.visible')
            .click();

        cy.get(elementos.messages.error)
            .should('have.length', mensagensEsperadas.length)

        cy.get(elementos.messages.error).each(($elementoAtual, index) => {
            expect($elementoAtual.text()).to.equal(mensagensEsperadas[index])
        });
    });
});