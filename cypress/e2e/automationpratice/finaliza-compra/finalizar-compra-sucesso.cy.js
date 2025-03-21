import { faker } from '@faker-js/faker'

describe("Finalização de compra - Faturamento com sucesso", () => {

    const elementos = {
        buttons: {
            save: `button.theme-btn-one:contains('Save')`
        },
        fields: {
            firstName: '#fname',
            lastName: '#lname',
            companyName: '#cname',
            email: '#email',
            zipCode: '#zip',
            fullAdress: '#faddress',
            message: '#messages',
        },
        selects: {
            country: '#country',
            city: '#city',
        },
        checks: {
            checkAddressBook: '#materialUnchecked',
        },
        messages: {
            success: `.check-out-form h3:contains('Billings Information registred with success!')`,
        }
    }

    beforeEach(() => {
        cy.accessarPaginaFinalizaCompra()
    });

    it("Deve cadastrar o faturamento com sucesso", () => {
        cy.get(elementos.fields.firstName)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.person.firstName());

        cy.get(elementos.fields.lastName)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.person.lastName());

        cy.get(elementos.fields.companyName)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.company.name());

        cy.get(elementos.fields.email)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.internet.email().toLowerCase())

        cy.get(elementos.selects.country)
            .should('be.visible')
            .should('be.enabled')
            .select('Afghanistan')

        cy.get(elementos.selects.city)
            .should('be.visible')
            .should('be.enabled')
            .select('Aland Islands')

        cy.get(elementos.fields.zipCode)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.location.zipCode())

        cy.get(elementos.fields.fullAdress)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.location.streetAddress())

        cy.get(elementos.fields.message)
            .should('be.visible')
            .should('be.enabled')
            .type(faker.lorem.lines(1))

        cy.get(elementos.checks.checkAddressBook)
            .should('be.visible')
            .should('be.enabled')
            .should('not.be.checked')
            .check();

        cy.get(elementos.buttons.save)
            .should('be.visible')
            .click();

        cy.get(elementos.messages.success)
            .should('contain.text', 'Billings Information registred with success!')
    });
});