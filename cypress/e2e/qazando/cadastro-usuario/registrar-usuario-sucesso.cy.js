import { faker } from '@faker-js/faker'

describe("Cadastro de usuário - Sucesso", () => {

    const fullNameFaker = faker.person.fullName()

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
            successTitle: '#swal2-title',
            successSubtitle: '#swal2-html-container'
        }
    }

    beforeEach(() => {
        cy.accessarPaginaCadastro()
    });

    it("Deve cadastrar um usuário com sucesso", () => {
        cy.get(elementos.fields.name)
            .should('be.visible')
            .type(fullNameFaker)

        cy.get(elementos.fields.email)
            .should('be.visible')
            .type(faker.internet.email())

        cy.get(elementos.fields.password)
            .should('be.visible')
            .type(faker.internet.password({ length: 6 }))

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.successTitle)
            .should('contain.text', 'Cadastro realizado!');

        cy.get(elementos.messages.successSubtitle)
            .should('contain.text', `Bem-vindo ${fullNameFaker}`);
    });
});