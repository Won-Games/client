/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  // Happy Path
  it('should fill the input and receive a success message', () => {
    // primeiro: eu intercepto qualquer chamada
    // respondo com sucesso
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()

    // eu espero receber a mensagem de sucesso
    cy.findByText(/You just received an email!/i).should('exist')
  });

  it('should fill the input with an invalid email and receive an error', () => {
    // interceptar a chamada
    // retornar um erro
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()

    // eu espero receber a mensagem de sucesso
    cy.findByText(/This email does not exist/i).should('exist')
  });
});
