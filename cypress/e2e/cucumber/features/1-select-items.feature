Feature: Validate top-navigation elements on Demoblaze website

Scenario: Verify top-navigation elements are present
  Given I am on the Demoblaze website
  When I look at the top-navigation bar
  Then I should see the following elements:
  | Element    | Attribute     | Value          |
  | Home       | href          | index.html     |
  | Contact    | data-target   | #exampleModal  |
  | About us   | data-target   | #videoModal    |
  | Cart       | href          | cart.html      |
  | Log in     | data-target   | #logInModal    |
  | Sign up    | data-target   | #signInModal   |