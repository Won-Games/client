/* eslint-disable prettier/prettier */
// load type definitions from Cypress module
/// <reference types="cypress"/>

declare namespace Cypress {
  interface Chainable {
    google(): Chainable<Window>
  }
}
