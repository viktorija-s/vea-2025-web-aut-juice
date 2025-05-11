import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/";
  }
  
  static get addNewCardButton(){
	return cy.get("#mat-expansion-panel-header-0");
  }
  
  static get nameField(){
	return cy.get("#mat-input-2");
  }
  
  static get cardNumberField(){
	return cy.get("#mat-input-3");
  }
  
  static get expiryMonthButton(){
	return cy.get("#mat-input-4");
  }
  
  static get expiryYearButton(){
	return cy.get("#mat-input-5");
  }
  
  static get submitButton(){
	return cy.get("#submitButton");
  }
  
  static get paymentCompletionContent(){
	return cy.get(".mat-mdc-snack-bar-label");
  }
}