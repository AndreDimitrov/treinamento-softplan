/// <reference types="cypress" />

describe('Autenticação', () => {
    
    it('Efetuar login com usuários e senhas válidos', () => {
        // acessar o site
        cy.visit('/');

        //clicar no botão sign in
        cy.get('.nav-link')
            .contains('Sign in')
                .click()
        
        //Outro método de efetuar o click    
        //cy.get('[href*=login]').click()
            //    .click()

        //instanciar usuário e senha >> Thanos7
        const user=Cypress.env('user').email
        const pass=Cypress.env('user').password

        //informar usuário e senha
        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)

        //clicar no botão entrar
        cy.get('button.btn-primary').click()

        //verificar se vc foi autenticado
        cy.get('.nav-pills a.nav-link')
            .should('have.length', 2)

            // deve conter o tamanho = 2    

        cy.get('.nav-pills a.nav-link') // 2 elementos
            // posição - ep, first, last
            .first() // .eq(0)
            .should('contain.text', 'Your Feed')

            // deve conter o texto Your Feed
            // should contain text Your Feed

    });

});