Feature: Purchase a random phone from Demoblaze

Scenario: Select and purchase a random item from Phones
  Given I am on the Demoblaze website
  When I select a random phone from the Phones category
  And I add the phone to the cart
  And I go to the cart
  And I click place order
  And I fill out the purchase form
  And I complete the purchase
  Then I should see a confirmation message
  And I should be back on the homepage
  And the cart should be empty