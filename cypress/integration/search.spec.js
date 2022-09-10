
//teste de consultas no site amazon
describe('Search', () => {
  beforeEach(() => {Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
      
    cy.visit('https://www.olx.com.br')
    

    cy.get('input[type="text"]')
    .as('searchField')
    .should('be.visible')
  });
  
  it.only('types and hits ENTER', () => {
    cy.get('@searchField')
      .type('Monitores{enter}')


  }); 
  it.only('type and hits Click', () => {
    cy.get(':nth-child(5) > .hide-on-tablet').click()
    cy.get('.sc-dEoRIm > .sc-ebFjAB').type('leoborges99@hotmail.com')
    cy.get('.sc-kaNhvL > .sc-ebFjAB').type('1')
    cy.get('.sc-iQtOjA > .sc-kGXeez').click()
    cy.get('.sc-jXQZqI').should('be.visible')


  }); 

  }); 
