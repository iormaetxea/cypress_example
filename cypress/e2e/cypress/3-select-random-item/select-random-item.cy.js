/// <reference types="cypress" />
//
//Exercise 3 - Select random item
//In this exercise, you will be select a random item from Phones
//  ● Navigate to https://www.demoblaze.com/
//  ● Select a random item from Phones category:
//    ○ Make a assertion
//    ○ Click Button Add to the Cart
//    ○ Close alert
//    ○ Go to Cart
//    ○ Click Place Order
//    ○ Fill the Place Order
//    ○ Click a Purchase
//    ○ Make and assertion about your Purchase
//

describe('Select and purchase a random item from Phones', () => {
    it('Selects a random item from Phones and makes a purchase', () => {
        cy.visit(Cypress.env('url'))
        // Intercept the POST request to get the phones
        cy.intercept('POST', Cypress.env('api') + '/bycat', (req) => {
            if (req.body.cat === 'phone') {
                req.continue()
            }
        }).as('getPhones')
        cy.get('[onclick="byCat(\'phone\')"]').click()
        // Wait for the POST request to complete
        cy.wait('@getPhones')
        // Select random phone in the list using Math.random
        cy.get('.card-title').its('length').then(numPhones => {
            const randomItem = Math.floor(Math.random() * numPhones)
            // Get the name of the phone
            cy.get('.card-title').eq(randomItem).invoke('text').then((text) => {
                // Add the phone to the cart
                cy.get('.card-title').eq(randomItem).click()
                cy.contains('Add to cart').click()
                // Close the alert
                cy.on('window:alert', (str) => {
                    expect(str).to.equal('Product added')
                    return true
                })
                // Go to the cart
                cy.get('#cartur').click()
                // Total price and phone are visible
                cy.get('#totalp').should('be.visible')
                cy.contains(text).should('be.visible')
                // Click place order
                cy.contains('Place Order').click()
                // Fill the form
                cy.get('#name').type(Cypress.env('user'))
                cy.get('#country').type(Cypress.env('country'))
                cy.get('#city').type(Cypress.env('city'))
                cy.get('#card').type(Cypress.env('card'))
                cy.get('#month').type(Cypress.env('month'))
                cy.get('#year').type(Cypress.env('year'))
                cy.contains('Purchase').click()
                // Assertion about the purchase
                cy.contains('Thank you for your purchase!').should('be.visible')
                cy.wait(500) // Wait for the purchase to complete
                // Close purchase confirmation
                cy.contains('OK').click()
                // Verify that we are back on the homepage
                cy.url().should('eq', Cypress.env('url') + '/index.html')
                // Verify that the cart is now empty
                cy.get('#cartur').click()
                cy.get('#totalp').should('not.be.visible')
            })
        })
    })
})  