import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/";
  }
  
  static get standardDeliveryRadioButton(){
	return cy.get("#mat-radio-45");  
  }
  
  static get continueButton(){
	  return cy.get('[aria-label="Proceed to delivery method selection"]');
  }
}