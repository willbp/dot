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
            error: '.errorLabel',
        }
    }

    beforeEach(() => {
        cy.accessarPaginaCadastro()
    });

    it("Deve exibir erro ao tentar cadastrar com todos os campos vazios", () => {
        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
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

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo e-mail deve ser prenchido corretamente');
    });

    it("Deve exibir erro ao tentar cadastrar com Nome e E-mail preenchidos, mas Senha vazia", () => {
        cy.get(elementos.fields.name)
            .should('be.visible')
            .type(faker.person.fullName())

        cy.get(elementos.fields.email)
            .should('be.visible')
            .type(faker.internet.email())

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo senha deve ter pelo menos 6 dígitos');
    });

    it("Deve exibir erro ao tentar cadastrar com Nome válido e E-mail inválido", () => {
        cy.get(elementos.fields.name)
            .should('be.visible')
            .type(faker.person.fullName())

        cy.get(elementos.fields.email)
            .should('be.visible')
            .type(faker.person.firstName())

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo e-mail deve ser prenchido corretamente');
    });

    it("Deve exibir erro ao tentar cadastrar com Nome e Senha preenchidos, mas E-mail vazio", () => {
        cy.get(elementos.fields.name)
            .should('be.visible')
            .type(faker.person.fullName())

        cy.get(elementos.fields.password)
            .should('be.visible')
            .type(faker.internet.password({ length: 6 }))

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo e-mail deve ser prenchido corretamente');
    });

    it("Deve exibir erro ao tentar cadastrar com E-mail e Senha válidos", () => {
        cy.get(elementos.fields.email)
            .should('be.visible')
            .type(faker.internet.email())

        cy.get(elementos.fields.password)
            .should('be.visible')
            .type(faker.internet.password({ length: 6 }))

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo nome deve ser prenchido');
    });

    it("Deve exibir erro ao cadastrar com E-mail inválido e Senha válida", () => {
        cy.get(elementos.fields.email)
            .should('be.visible')
            .type(faker.person.firstName())

        cy.get(elementos.fields.password)
            .should('be.visible')
            .type(faker.internet.password({ length: 6 }))

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo nome deve ser prenchido');
    });

    it("Deve exibir erro ao tentar cadastrar com Nome e E-mail vazios e Senha válida", () => {
        cy.get(elementos.fields.password)
            .should('be.visible')
            .type(faker.internet.password({ length: 6 }))

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo nome deve ser prenchido');
    });

    it("Deve exibir erro ao tentar cadastrar com Nome e E-mail vazios e Senha inválida", () => {
        cy.get(elementos.fields.password)
            .should('be.visible')
            .type(faker.internet.password({ length: 5 }))

        cy.get(elementos.buttons.register)
            .should('be.visible')
            .click()

        cy.get(elementos.messages.error)
            .should('be.visible')
            .should('contain.text', 'O campo nome deve ser prenchido');
    });
});