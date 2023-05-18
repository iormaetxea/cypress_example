/// <reference types="cypress" />
//
//Exercise 2 - Add to Cart
//The objective of this task is to functionally verify the `Add to cart` feature.
//  ● Navigate to https://www.demoblaze.com/
//  ● Click on Laptops
//  ● Select a item:
//    ○ Make a assertion
//    ○ Click Button Add to the Cart
//    ○ Close alert
//    ○ Go to Cart
//    ○ Delete Item
//    ○ Make an assertion
//

describe('Functional verification of the Add to cart feature', () => {

    it('Adds a laptop to the cart and then removes it', () => {
        cy.visit(Cypress.env('url'))
        // Intercept the POST request to get the laptops. it sometimes gets phones if we don't do this
        cy.intercept('POST', Cypress.env('api') + '/bycat', (req) => {
            if (req.body.cat === 'notebook') {
                req.continue()
            }
        }).as('getLaptops')
        //click on Laptops
        cy.get('[onclick="byCat(\'notebook\')"]').click()
        // Wait for the POST request to complete
        cy.wait('@getLaptops')
        //add first laptop in the list to the cart
        //get the name of the laptop for assertion
        const laptop = cy.get('.card-title').first().invoke('text')
        laptop.then((laptopName) => {
            //add the laptop to the cart
            cy.get('.card-title').first().click()
            cy.contains('Add to cart').click()
            //close the alert
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Product added')
                return true
            })
            //go to the cart
            cy.get('#cartur').click()
            //total price and laptop are visible
            cy.get('#totalp').should('be.visible')
            cy.contains(laptopName).should('be.visible')
            //delete the laptop from the cart
            cy.contains('Delete').click()
            //the laptop is not in the cart anymore
            cy.contains(laptopName).should('not.exist')
        })
    })
})

