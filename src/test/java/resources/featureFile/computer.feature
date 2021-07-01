Feature: Computer Test

  As a user I want to shop computer products successfully

  @Smoke@Regression
  Scenario: User should able to arrange products in "Name: Z to A" alphabetical order
    Given I am on homepage
    When I mouse hover on computer top tab
    And I mouse hover and click on "Desktops"
    And I select sort by position "Name: Z to A"
    Then I should be able to verify the product arranged in descending order

  @Sanity@Regression
  Scenario: User should able to arrange products in "Name: A to Z" alphabetical order
    Given I am on homepage
    When I mouse hover on computer top tab
    And I mouse hover and click on "Desktops"
    And I select sort by position "Name: A to Z"
    And I add build your own computer to cart
    Then I should be able to verify "Build your own computer" page title text
    When I select processor "2.2 GHz Intel Pentium Dual-Core E2200"
    And I select RAM "8GB [+$60.00]"
    And I click radio button to select HDD
    And I click radio button to select OS
    And I click check box to select Software
    Then I should be able to verify total price of "$1,470.00"
    And I should be able to add the computer product to cart
    And I should be able to see green bar message "The product has been added to your shopping cart"



