describe('Interceptando chamada da api e populando componente', () => {

    Cypress.on("uncaught:exception", () => false)

    beforeEach(() => {
        cy.visit('https://www.ucicinemas.com.br/')
    })

    it('Deve interceptar a api e popular o componente com novo valor', () => {
        cy.fixture('dados-desafio-intercept').then((filmes) => {
            cy.intercept('GET', 'https://www.ucicinemas.com.br/api/Filmes/ListarFilmes/cinemas/**', {
                statusCode: 200,
                body: filmes
            }).as('getCinemas')
        });

        cy.get('#dl-menu select.menuCidade').select('Canoas')
        cy.get('#menuCinemaFiltro').select('UCI ParkShopping Canoas')

        cy.wait('@getCinemas').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
            expect(interception.response.body['TESTE INTERCEPTADO']).to.not.be.undefined
            expect(interception.response.body['TESTE INTERCEPTADO']).to.be.an('object')
            expect(interception.response.body['TESTE INTERCEPTADO'].NomeDestaque).to.equal('TESTE INTERCEPTADO')
        })

        cy.get('#menuFilmeFiltro')
            .should('contain.text', 'TESTE INTERCEPTADO')
            .select('TESTE INTERCEPTADO')
    });
});