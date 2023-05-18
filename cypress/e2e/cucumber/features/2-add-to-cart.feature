Feature: Add to Cart feature on Demoblaze website

Scenario: Add a laptop to the cart and delete it
  Given I am on the Demoblaze website
  When I click on Laptops
  And I select the first laptop in the list
  And I click on the Add to cart button
  And I close the alert
  And I go to the Cart page
  Then I see the laptop name and the total price in the cart
  When I delete the laptop from the cart
  Then the laptop should not be in the cart
  