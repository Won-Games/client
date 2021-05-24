/// <reference path="../support/index.d.ts" />

import { createUser, User } from "../support/generate";

describe('Checkout', () => {
  let user: User
  before(() => {
    user = createUser()
  })

  describe('Free Games', () => {
    it('should buy free game', () => {
      // visitar sign-up
      cy.visit('/sign-up')

      // preencher os dados
      cy.signUp(user)

      // redirecionar para home
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // abrir a página de explore
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filtrar por jogos free
      cy.findByText(/free/i).click()
      cy.url().should('contain', `price_lte=0`)

      // adicionar um jogo ao carrinho
      cy.addToCartByIndex(0)

      // vou para página de checkout
      cy.findAllByLabelText(/shopping cart/i).first().click()
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // verificar se tá escrito que é só jogo gratuito
      cy.findByText(/only free games, click buy and enjoy!/i).should('exist')

      // buy game
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirecionar para success
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      // buscar pelo texto de sucesso
      cy.findByRole('heading', { name: /your purchase was successful!/i }).should('exist')

      // clicar no link de orders
      cy.findByRole('link', { name: /^orders/i }).click()

      // verificar se tem um jogo comprado
      cy.getByDataCy('game-item').should('have.length', 1)
    });
  });

  describe('Paid Games', () => {
    let user: User
    before(() => {
      user = createUser()
    })

    it('should buy paid game', () => {
      // visitar sign-up
      cy.visit('/sign-up')

      // preencher os dados
      cy.signUp(user)

      // redirecionar para home
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // abrir a página de explore
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filtrar por jogos do mais caro ao mais barato
      cy.findByText(/highest to lowest/i).click()

      // adicionar um jogo ao carrinho
      cy.addToCartByIndex(0)

      // vou para página de checkout
      cy.findAllByLabelText(/shopping cart/i).first().click()
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // verificar se o botão está desabilitado
      cy.findByRole('button', { name: /buy now/i }).should('have.attr', 'disabled')

      // preencher o cartão
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1030') //MMYY
      cy.fillElementsInput('cardCvc', '103')

      // buy game
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirecionar para success
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      // buscar pelo texto de sucesso
      cy.findByRole('heading', { name: /your purchase was successful!/i }).should('exist')

      // clicar no link de orders
      cy.findByRole('link', { name: /^orders/i }).click()

      // verificar se tem um jogo comprado
      cy.getByDataCy('game-item').should('have.length', 1)
    });
  });
});
