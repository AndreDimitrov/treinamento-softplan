// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
    it('Criar primeiro artigo', {tags: 'Primeiro'},function () {
     
      cy.login()
  
      cy.get('a[href$=editor]').click();
      //cy.get('input[placeholder="Article title"]').clear();
      cy.get('input[placeholder="Article title"]').type('Artigo 1');
      //cy.get('input[placeholder="What is this article about?"]').clear();
      cy.get('input[placeholder="What is this article about?"]').type('Iniciando o primeiro artigo');
      cy.get('form textarea').type('Artigo iniciado');
      //cy.get('input[placeholder="Enter tags"]').clear();
      cy.get('input[placeholder="Enter tags"]').type('Primeiro artigo');
      cy.get('button.btn-primary').contains('Publish article').click();
  
      //
      cy.get('h1').should('contain.text', 'Artigo 1')
      /* ==== End Cypress Studio ==== */
    });
    it('Criar segundo artigo', {tags: 'Segundo'}, function () {
     
      cy.login()
  
      cy.get('a[href$=editor]').click();
      //cy.get('input[placeholder="Article title"]').clear();
      cy.get('input[placeholder="Article title"]').type('Artigo 2');
      //cy.get('input[placeholder="What is this article about?"]').clear();
      cy.get('input[placeholder="What is this article about?"]').type('Iniciando o segundo artigo');
      cy.get('form textarea').type('Artigo 2 iniciado');
      //cy.get('input[placeholder="Enter tags"]').clear();
      cy.get('input[placeholder="Enter tags"]').type('Artigo 2');
      cy.get('button.btn-primary').contains('Publish article').click();
  
      //
      cy.get('h1').should('contain.text', 'Artigo 2')
      /* ==== End Cypress Studio ==== */
    });
    
  });
  
  // npx cypress run --spec 'cypress/integration/Teste_com_Filtro.spec.js' --env grepTags=Segundo
