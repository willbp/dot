describe("Validação de erros no cadastro de usuário", () => {

    const elementos = {
        buttons: {
            register: '#btnRegister'
        },
        fields: {
            name: '#user',
            email: '#email',
            password: '#password'
        },
        messages: {
            errorName: '#errorMessageFirstName',
        }
    }

    beforeEach(() => {
        cy.accessarPaginaCadastro()
    });

    it("Deve exibir erro ao tentar cadastrar com todos os campos vazios", () => {
        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.errorName)
            .should('be.visible')
            .should('contain.text', 'O campo nome deve ser prenchido');
    });
});