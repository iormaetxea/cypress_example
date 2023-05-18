/// <reference types="cypress" />
//
//Exercise 1 - Selecting Elements
//In this exercise, your task is to ensure that the proper elements are present.
//  ● Navigate to https://www.demoblaze.com/
//  ● Validate that the following top-navigation elements are present
//    ○ Home
//    ○ Contact
//    ○ About Us
//    ○ Cart
//    ○ Log In
//    ○ Sign Up
//

describe('Ensure that the top-navigation elements are present', () => {
  it('Validates that all top-navigation elements are present', () => {
    cy.visit(Cypress.env('url'))
    cy.get('#navbarExample').get('.nav-item').contains('Home').should('be.visible').and('have.attr', 'href', 'index.html')
    cy.get('#navbarExample').get('.nav-item').contains('Contact').should('be.visible').and('have.attr', 'data-target', '#exampleModal')
    cy.get('#navbarExample').get('.nav-item').contains('About us').should('be.visible').and('have.attr', 'data-target', '#videoModal')
    cy.get('#navbarExample').get('.nav-item').contains('Cart').should('be.visible').and('have.attr', 'href', 'cart.html')
    cy.get('#navbarExample').get('.nav-item').contains('Log in').should('be.visible').and('have.attr', 'data-target', '#logInModal')
    cy.get('#navbarExample').get('.nav-item').contains('Sign up').should('be.visible').and('have.attr', 'data-target', '#signInModal')
  })
})