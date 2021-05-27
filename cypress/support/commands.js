// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// URL: https://conduit.productionready.io/api
// rota: /users/login



Cypress.Commands.add('login', () => {

    // template string

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/users/login`,
        body: {
            "user": {
                "password": Cypress.env('user').password,
                "email": Cypress.env('user').email
            }
        },
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        }

    }).then(Response => {
        // JSON Path
        //response.

        cy.log(Response.body.user.token)

        localStorage.setItem('token', Response.body.user.token)
    })

    cy.visit('/');

    //verificar se vc foi autenticado
    cy.get('.nav-pills a.nav-link')
        .should('have.length', 2)

    // deve conter o tamanho = 2    

    cy.get('.nav-pills a.nav-link') // 2 elementos
        // posição - ep, first, last
        .first() // .eq(0)
        .should('contain.text', 'Your Feed')
})