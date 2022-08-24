Feature: Verify display of validation error 

Background:
        Given I visit ADP website
        And I select State Taxes

Scenario: Check that negative number validation error is displayed 
    Given I choose my state "Alabama"
    When I type a negative value in dependents number
    Then I should see validation error message