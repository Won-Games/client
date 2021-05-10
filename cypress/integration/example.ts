/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to go Google', () => {
    cy.google()
  })

  it('should change light/dark theme on willian justen site', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })

  it('should visit won games', () => {
    cy.visit('https://wongames.willianjusten.com.br')

    cy.findByText(/Esse é um site de estudos!/i).should('exist')
  })
})
