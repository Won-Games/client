/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=123456')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  });

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  });

  it('should fill the input and redirect to home page with the user signed in', () => {
    // rota do credentials do next-auth
    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: {} }
    })

    // rota do Strapi
    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: { user: { email: 'valid@email.com' } }
    })

    // rota de session do next-auth
    cy.intercept('GET', '**/auth/session*', {
      statusCode: 200,
      body: { user: { name: "cypress" } }
    })

    cy.visit('/reset-password?code=12345')

    // preencher as senhas (já com o token válido)
    cy.findAllByPlaceholderText(/^password/i).type('pass123')
    cy.findAllByPlaceholderText(/confirm password/i).type('pass123')
    cy.findByRole('button', { name: /reset password/i}).click()

    // redireciona para home
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    // tem o usuário logado com o name no menu
    cy.findByText(/cypress/i).should('exist')
  });
});
