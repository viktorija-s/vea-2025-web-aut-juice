import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  
  static get accountButton(){
	return cy.get("#navbarAccount");  
  }
  
  static get loginButton(){
	return cy.get("#navbarLoginButton");  
  }
  
  static get userProfilMenuButton(){
	return cy.get("button[aria-label='Go to user profile']");    
  }
  
  static get searchIcon() {
    return cy.get("#searchQuery");
  }
  
  static get searchField(){
	return cy.get("#searchQuery input");
  }
  
  static get productBox(){
	return cy.get("div.mdc-card");
  }
  
  static get productBoxContent(){
	return cy.get("[id*='mat-mdc-dialog-']")
  }
  
  static get closeButton(){
	return cy.get(".close-dialog");
  }
  
  static get reviewsButton(){
	return cy.get(".mat-content");
  }
  
  static get reviewsContent(){
	return cy.get(".review-text");
  }
  
  static get reviewField(){
	return cy.get('textarea[placeholder="What did you like or dislike?"]');
  }
  
  static get submitButton(){
	return cy.get("#submitButton");
  }
  
  static get productsPerPage(){
	return cy.get(".mat-mdc-select-trigger ng-tns-c1771602899-17");
  }
  
  static get addToBasketButton(){
	return cy.get(".btn-basket");
  }
  
  static get yourBasketButton(){
	return cy.get('[aria-label="Show the shopping cart"]');
  }
  
  static get ordersAndPaymentButton(){
	return cy.get(".mat-mdc-menu-item");
  }
  
  static get mySavedAddressesButton() {
	return cy.get('[routerlink="/address/saved"]');
  }
  
  
  static get myPaymentsOptionsButton() {
	return cy.get('[routerlink="/saved-payment-methods"]');
  }
  
  static get productCard() {
	return cy.get('.mat-grid-tile');
  }
  
  static get itemsPerPage() {
	return cy.get('.mat-mdc-paginator-touch-target');
  }
  
  static get itemsPerPage24() {
	return cy.get('#mat-option-1');
  }
  
  static get itemsPerPage36() {
	return cy.get('#mat-option-2');
  }
}
