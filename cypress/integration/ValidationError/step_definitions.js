import { And, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open ADP website', () => {
    cy.visit("/");
});

