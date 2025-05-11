import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/";
  }
  
  static get addNewAddressButton(){
	  return cy.get(".btn-new-address");
  }
}