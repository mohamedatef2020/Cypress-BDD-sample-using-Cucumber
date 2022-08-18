Feature: Verify display of validation error 

Background:
        Given I open ADP website
        # And select State Taxes
Scenario: Check that negative number validation error is displayed 
    # When I enter earnings data
    # And I set my state taxes to "alabama"
    # And I enter negative value in dependents
    # Then i should see error message