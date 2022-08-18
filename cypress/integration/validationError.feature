Feature: Verify display of validation error 

Background:
        Given I visit ADP website
        And I select State Taxes

Scenario: Check that negative number validation error is displayed 
    Given I choose my state "Alabama"
    When I enter negative value in dependents
    Then I should see validation error message