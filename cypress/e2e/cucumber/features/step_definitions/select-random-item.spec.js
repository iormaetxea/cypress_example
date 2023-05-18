const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

When('I select a random phone from the Phones category', () => {
    cy.intercept('POST', Cypress.env('api') + '/bycat', (req) => {
        if (req.body.cat === 'phone') {
            req.continue()
        }
    }).as('getPhones')
    cy.get('[onclick="byCat(\'phone\')"]').click()
    cy.wait('@getPhones')
    cy.get('.card-title').its('length').then(numPhones => {
        const randomItem = Math.floor(Math.random() * numPhones)
        cy.wrap(randomItem).as('randomItem')
        cy.get('.card-title').eq(randomItem).invoke('text').as('phoneName')
    })
})

And('I add the phone to the cart', () => {
    cy.get('@randomItem').then((randomItem) => {
        cy.get('.card-title').eq(randomItem).click()
        cy.contains('Add to cart').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
            return true
        })
    })
})

And('I go to the cart', () => {
    cy.get('#cartur').click()
})

And('I click place order', () => {
    cy.contains('Place Order').click()
})

And('I fill out the purchase form', () => {
    cy.get('#name').type('Itziar Ormaetxea')
    cy.get('#country').type('Spain')
    cy.get('#city').type('Madrid')
    cy.get('#card').type('4242424242424242')
    cy.get('#month').type('January')
    cy.get('#year').type('2028')
})

And('I complete the purchase', () => {
    cy.contains('Purchase').click()
})

Then('I should see a confirmation message', () => {
    cy.contains('Thank you for your purchase!').should('be.visible')
    cy.contains('Thank you for your purchase!').should('be.visible')
    cy.wait(500)
    cy.contains('OK').click()
})

And('I should be back on the homepage', () => {
    cy.url().should('eq', Cypress.env('url') + '/index.html')
})

And('the cart should be empty', () => {
    cy.get('#cartur').click()
    cy.get('#totalp').should('not.be.visible')
})