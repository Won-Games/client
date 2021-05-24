/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: "New Games", hightlight: false })
    cy.shouldRenderShowcase({ name: "Most Popular Games", hightlight: true })
    cy.shouldRenderShowcase({ name: "Upcoming Games", hightlight: true })
    cy.shouldRenderShowcase({ name: "Free Games", hightlight: true })
  });
});
