import {And, Given, When} from 'cypress-cucumber-preprocessor/steps';
import {paycheckCalculatorPage} from '../../support/paycheckCalculatorPage'

Given('I visit ADP website', () => {
  cy.visit("/");
});

And('I select State Taxes', ()=>{
  paycheckCalculatorPage.chooseStateTaxTab();
});

Given ('I choose my state {string}',(stateName)=>{
  paycheckCalculatorPage.openStateList();
  paycheckCalculatorPage.selectState(stateName);
})

When ('I type a negative value in dependents number',()=>{
  paycheckCalculatorPage.clearDependentsAndTypeNegativeNumber();
})

Then( 'I should see validation error message',()=>{
    paycheckCalculatorPage.assertNegativeNumberValidationMessageIsDisplayed();
})