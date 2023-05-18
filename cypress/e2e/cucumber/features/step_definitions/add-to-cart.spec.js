const {Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

let laptopName = "";

When('I click on Laptops', () => {
    cy.intercept('POST', Cypress.env('api') + '/bycat', (req) => {
        if (req.body.cat === 'notebook') {
            req.continue()
        }
    }).as('getLaptops')
    cy.get('[onclick="byCat(\'notebook\')"]').click()
    cy.wait('@getLaptops')
})

And('I select the first laptop in the list', () => {
    cy.get('.card-title').first().invoke('text').then(name => {
        laptopName = name
        cy.get('.card-title').first().click()
    })
})

And('I click on the Add to cart button', () => {
    cy.contains('Add to cart').click()
})

And('I close the alert', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added')
        return true
    })
})

And('I go to the Cart page', () => {
    cy.get('#cartur').click()
})

Then('I see the laptop name and the total price in the cart', () => {
    cy.get('#totalp').should('be.visible')
    cy.contains(laptopName).should("be.visible");
})

And('I delete the laptop from the cart', () => {
    cy.contains('Delete').click()
})

Then('the laptop should not be in the cart', () => {
    cy.contains(laptopName).should('not.exist')
})
