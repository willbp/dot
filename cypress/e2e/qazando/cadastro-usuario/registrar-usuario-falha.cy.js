import { faker } from '@faker-js/faker'

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

    it("Deve exibir erro ao tentar cadastrar apenas com campo Nome preenchido", () => {
        cy.get(elementos.fields.name)
            .should('be.visible')
            .type(faker.person.fullName())

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.errorName)
            .should('be.visible')
            .should('contain.text', 'O campo e-mail deve ser prenchido corretamente');
    });
});