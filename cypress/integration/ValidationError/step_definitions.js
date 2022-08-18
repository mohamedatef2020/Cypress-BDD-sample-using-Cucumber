import {And, Given, When} from 'cypress-cucumber-preprocessor/steps';

Given('I visit ADP website', () => {
  cy.visit("/");
});

And('I select State Taxes', ()=>{
  cy.get('pwc-pcc-mfe').find('#state-tab').click();
});

Given ('I choose my state {string}',(state)=>{
    cy.get('pwc-pcc-mfe').find('#state-select').click();
    cy.get('pwc-pcc-mfe').find(`[aria-label="${state}"]`).click();
})

When ('I enter negative value in dependents',()=>{
    cy.get('pwc-pcc-mfe').find('[name="numberOfDependents"]').clear().type('-1{enter}', { force: true });
})

Then( 'I should see validation error message',()=>{
    cy.contains('Number must be greater than 0').should('be.visible')
})