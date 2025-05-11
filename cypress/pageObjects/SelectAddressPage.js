import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }
  
  static get radioButton(){
	  return cy.get("#mat-radio-42");
  }
  
  static get continueButton(){
	  return cy.get('[aria-label="Proceed to payment selection"]');
  }
}