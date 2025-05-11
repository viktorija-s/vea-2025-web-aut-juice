import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }
  
  static get countryField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide a country.']");
  }
  
  static get nameField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide a name.']");
  }
  
  static get mobileNumberField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide a mobile number.']");
  }
  
  static get zipCodeField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide a ZIP code.']");
  }
  
  static get addressField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide an address.']");
  }
  
  static get cityField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide a city.']");
  }
  
  static get stateField(){
	  return cy.get(".mat-mdc-input-element[placeholder='Please provide a state.']");
  }
  
  static get submitButton(){
	  return cy.get("#submitButton");
  }
  
  static get createdAddressContent(){
	  return cy.get(".mat-mdc-snack-bar-label");
  }
}