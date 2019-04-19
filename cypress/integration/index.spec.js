/// <reference types="Cypress" />

context("Homepage", () => {
  beforeEach(() => {
    // TODO make the port dynamic
    cy.visit(`http://localhost:8000`)
    cy.injectAxe()
    cy.wait(100)
  })
  it("has no accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("has focusable buttons", () => {
    cy.getTestElement("hello-btn").focus()
    cy.focused().should("have.text", "click me")
  })
})
