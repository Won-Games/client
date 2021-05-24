/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    // visitar a home
    cy.visit('/')

    // procurar por um jogo e clicar no botão de carrinho
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // procurar por outro jogo e clicar no botão de carrinho
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // procurar por outro jogo e clicar no botão de carrinho
    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // verificar se o ícone do carinho tem 3 items
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    // abre o carrinho e verifica se tem 3 items
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    // fecha o carrinho
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    // procurar por um jogo e clicar no botão de carrinho
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // procurar por outro jogo e clicar no botão de carrinho
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // procurar por outro jogo e clicar no botão de carrinho
    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // verifica se o ícone de carrinho num tem nada
    cy.findAllByLabelText(/cart items/i).should('not.exist')

    // abre o carinho e verifica se tá vazio
    cy.findAllByLabelText(/shopping cart/i).first().click()

    cy.getByDataCy('cart-list').within(() => {
      // cy.findAllByRole('heading', { name: /your cart is empty/i, hidden: true }).should('exist')
      cy.findAllByRole('heading', { name: /your cart is empty/i }).should('exist')
    })
  });
});
