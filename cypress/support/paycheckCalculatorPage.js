class PaycheckCalculatorPage {
  // #### Page Elements ####
  stateTaxTab() {
    return cy.get('#state-tab');
  }

  stateList() {
    return cy.get('#state-select');
  }

  state(stateName) {
    return cy.get(`[aria-label="${stateName}"]`);
  }

  dependentsNumber() {
      return cy.get('[name="numberOfDependents"]');
  }

  negativeNumberValidationMessage() {
      return cy.contains('Number must be greater than 0');
  }

  // #### Page Actions ####
  chooseStateTaxTab() {
    this.stateTaxTab().click();
  }

  openStateList() {
    this.stateList().click();
  }

  selectState(stateName) {
    this.state(stateName).click();
  }

  clearDependentsAndTypeNegativeNumber() {
    this.dependentsNumber().clear({ force: true }).type('-1{enter}', { force: true });
  }

  // #### Page Assertions ####
  assertNegativeNumberValidationMessageIsDisplayed() {
    this.negativeNumberValidationMessage().should('be.visible');
  }
}
export const paycheckCalculatorPage = new PaycheckCalculatorPage();