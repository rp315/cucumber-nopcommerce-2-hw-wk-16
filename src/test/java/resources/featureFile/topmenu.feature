Feature: Top Menu Test

  As a user I want to click on top menu tabs and verify page navigation on nopcommerce website


  @Smoke
  Scenario Outline: User should be able to click top menu tab and navigate to "<topMenuTab>" page successfully
    Given I am on homepage
    When I click on "<topMenuTab>" from top tabs
    Then I should be able to navigate to the "<topMenuTab>" and verify the page title


    Examples:

      | topMenuTab        |
      | Computers         |
      | Electronics       |
      | Apparel           |
      | Digital downloads |
      | Books             |
      | Jewelry           |
      | Gift Cards        |
