/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    const user = createUser()
    cy.visit('/sign-up')
    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  });

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()

    cy.findByText(/cypress/i).should('exist').click()
    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/cypress/i).should('not.exist')
  });

  it('should sign the user and redirect to the page that it was previously defined', () => {
    cy.visit('/profile/me')

    // redirecionando para o sign in com a callbackUrl
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)

    // fazer o sign in
    cy.signIn()

    // espero ser redirecionado para profile
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByLabelText(/username/i).should('have.value', 'cypress')
    cy.findByLabelText(/e-mail/i).should('have.value', 'e2e@wongames.com')
  });
});
