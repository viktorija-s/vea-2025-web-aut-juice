import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/";
  }
  
  static get paymentButton(){
	return cy.get("#mat-radio-47-input");
  }
  
  static get continueButton(){
	  return cy.get('[aria-label="Proceed to review"]');
  }
}