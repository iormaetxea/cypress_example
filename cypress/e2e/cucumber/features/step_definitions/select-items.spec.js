const {Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

When('I look at the top-navigation bar', () => {
  cy.get('#navbarExample')
    .should('be.visible')
})

Then('I should see the following elements:', (dataTable) => {
  dataTable.hashes().forEach(row => {
    const { Element, Attribute, Value } = row
    cy.get('#navbarExample')
      .get('.nav-item')
      .contains(Element)
      .should('be.visible')
      .and('have.attr', Attribute, Value)
  })
})