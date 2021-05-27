// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
  it('Criar um novo artigo', function () {
   
    cy.login()

    cy.get('a[href$=editor]').click();
    //cy.get('input[placeholder="Article title"]').clear();
    cy.get('input[placeholder="Article title"]').type('Teste 1');
    //cy.get('input[placeholder="What is this article about?"]').clear();
    cy.get('input[placeholder="What is this article about?"]').type('Iniciando teste 1');
    cy.get('form textarea').type('Test iniciado');
    //cy.get('input[placeholder="Enter tags"]').clear();
    cy.get('input[placeholder="Enter tags"]').type('Teste 1');
    cy.get('button.btn-primary').contains('Publish article').click();

    //
    cy.get('h1').should('contain.text', 'Teste 1')
    /* ==== End Cypress Studio ==== */
  });
    
});

