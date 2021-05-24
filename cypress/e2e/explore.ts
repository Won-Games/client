/// <reference path="../support/index.d.ts" />

import { priceFields, genreFields, platformFields, sortFields} from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  it('should render filters columns', () => {
    cy.visit('/games')

    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    priceFields.map(({ label })=> {
      cy.findByText(label).should('exist')
    })

    platformFields.map(({ label })=> {
      cy.findByText(label).should('exist')
    })

    sortFields.map(({ label })=> {
      cy.findByText(label).should('exist')
    })

    genreFields.map(({ label })=> {
      cy.findByText(label).should('exist')
    })
  });
});
