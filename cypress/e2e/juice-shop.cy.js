import { HomePage } from "../pageObjects/HomePage";
import{LoginPage} from "../pageObjects/LoginPage"
import{RegistrationPage} from "../pageObjects/RegistrationPage"
import{BasketPage} from "../pageObjects/BasketPage"
import{SelectAddressPage} from "../pageObjects/SelectAddressPage"
import{DeliveryMethodPage} from "../pageObjects/DeliveryMethodPage"
import{PaymentOptionsPage} from "../pageObjects/PaymentOptionsPage"
import{OrderSummaryPage} from "../pageObjects/OrderSummaryPage"
import{OrderCompletionPage} from "../pageObjects/OrderCompletionPage"
import{SavedAddressesPage} from "../pageObjects/SavedAddressesPage"
import{CreateAddressPage} from "../pageObjects/CreateAddressPage"
import{SavedPaymentMethodsPage} from "../pageObjects/SavedPaymentMethodsPage"

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
	  HomePage.accountButton.click();
      // Click Login button
	  HomePage.loginButton.click();
      // Set email value to "demo"
	  LoginPage.emailField.type("demo");
      // Set password value to "demo"
	  LoginPage.passwordField.type("demo");
      // Click Log in
	  LoginPage.loginButton.click();
      // Click Account button
	  HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
	  HomePage.userProfilMenuButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
	  HomePage.accountButton.click();
      // Login button
	  HomePage.loginButton.click();
      // Click "Not yet a customer?"
	  LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
	  const emailNumber = Math.floor(Math.random() * 101);
	  const email = "email_" + emailNumber.toString() + "@ebox.com";
	  // Save that email address to some variable
	  const password = "randomPassword123#";
	  RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
	  RegistrationPage.passwordField.type(password);
	  RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
	  RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
	  RegistrationPage.menuOptions.contains("Your favorite book?").click();
      // Fill in answer
	  RegistrationPage.answerField.type("ABC123");
      // Click Register button
	  RegistrationPage.registerButton.click();
      // Set email value to previously created email
	  LoginPage.emailField.type(email);
      // Set password value to previously used password value
	  LoginPage.passwordField.type(password);
      // Click login button
	  LoginPage.loginButton.click();
      // Click Account button
	  HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
	  HomePage.userProfilMenuButton.should("contain.text", "email");
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
	  HomePage.searchIcon.click();
      // Search for Lemon
	  HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
	  HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
	  HomePage.productBoxContent.should("contain.text","Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
	it("Search 500ml and validate Lemon, while having multiple cards", () =>{
	// Click on search icon
	HomePage.searchIcon.click();
    // Search for 500ml
	HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
	HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
	HomePage.productBoxContent.should("contain.text","Sour but full of vitamins.");	
	});
    

    // Create scenario - Search 500ml and validate cards
	it("Search 500ml and validate cards", () => {
    // Click on search icon
	HomePage.searchIcon.click();
    // Search for 500ml
	HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
	HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
	HomePage.productBoxContent.should("contain.text","Now with even more exotic flavour.");	
    // Close the card
	HomePage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
	HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
	HomePage.productBoxContent.should("contain.text","Sour but full of vitamins.");	
    // Close the card
	HomePage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
	HomePage.productBox.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
	HomePage.productBoxContent.should("contain.text","Sweet & tasty!");	
	});
	
    // Create scenario - Read a review
	it("Read a review", () =>{
    // Click on search icon
	HomePage.searchIcon.click();
    // Search for King
	HomePage.searchField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
	HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    // Click expand reviews button/icon (wait for reviews to appear)
	HomePage.reviewsButton.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
	HomePage.reviewsContent.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
	});

    // Create scenario - Add a review
	it("Add a review", () => {
    // Click on search icon
	HomePage.searchIcon.click();
    // Search for Raspberry
	HomePage.searchField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
	HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
    // Type in review - "Tastes like metal"
	HomePage.reviewField.type("Tastes like metal{enter}");
    // Click Submit
	HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
	HomePage.reviewsButton.click();
    // Validate review -  "Tastes like metal"
	HomePage.reviewsContent.should("contain.text", "Tastes like metal");
	});


	//jāpabeidz
    // Create scenario - Validate product card amount
	it.only("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
	HomePage.productCard.should("have.length", 12);
    // Change items per page (at the bottom of page) to 24
	HomePage.itemsPerPage.click();
    HomePage.itemsPerPage24.click();
	// Validate that the amount of cards is 24
	HomePage.productCard.should("have.length", 24);
    // Change items per page (at the bottom of page) to 36
	HomePage.itemsPerPage.click();
    HomePage.itemsPerPage36.click();
    // Validate that the amount of cards is 35
	HomePage.productCard.should("have.length", 36);
	});

    // Create scenario - Buy Girlie T-shirt
	it("Buy Girlie T-shirt", () => {
    // Click on search icon
	HomePage.searchIcon.click();
    // Search for Girlie
	HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
	HomePage.addToBasketButton.click();
    // Click on "Your Basket" button
	HomePage.yourBasketButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
	BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
	SelectAddressPage.radioButton.click();
    // Click Continue button
	SelectAddressPage.continueButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
	DeliveryMethodPage.standardDeliveryRadioButton.click();
    // Click Continue button
	DeliveryMethodPage.continueButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
	PaymentOptionsPage.paymentButton.click();
    // Click Continue button
	PaymentOptionsPage.continueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
	OrderSummaryPage.placYourOrderAndPayButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
	OrderCompletionPage.orderCompletionContent.should("contain.text", "Thank you for your purchase!");
	});

    // Create scenario - Add address
	it("Add address", () => {
    // Click on Account
	HomePage.accountButton.click();
    // Click on Orders & Payment
	HomePage.ordersAndPaymentButton.filter('[aria-label="Show Orders and Payment Menu"]').click();
    // Click on My saved addresses
	HomePage.mySavedAddressesButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
	SavedAddressesPage.addNewAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
	CreateAddressPage.countryField.type("Random Country{enter}");
	CreateAddressPage.nameField.type("John{enter}");
	CreateAddressPage.mobileNumberField.type("12345678{enter}");
	CreateAddressPage.zipCodeField.type("123{enter}");
	CreateAddressPage.addressField.type("Random Address{enter}");
	CreateAddressPage.cityField.type("Random City{enter}");
	//CreateAddressPage.stateField.type("Random State{enter}");
    // Click Submit button
	CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
	CreateAddressPage.createdAddressContent.should("contain.text", "The address at Random City has been successfully added to your addresses.");
	});

    // Create scenario - Add payment option
	it("Add payment option", () => {
    // Click on Account
	HomePage.accountButton.click();
    // Click on Orders & Payment
	HomePage.ordersAndPaymentButton.filter('[aria-label="Show Orders and Payment Menu"]').click();
    // Click on My payment options
	HomePage.myPaymentsOptionsButton.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
	SavedPaymentMethodsPage.addNewCardButton.click();
    // Fill in Name
	SavedPaymentMethodsPage.nameField.type("John{enter}");
    // Fill in Card Number
	SavedPaymentMethodsPage.cardNumberField.type("1234567890123455{enter}");
    // Set expiry month to 7
	SavedPaymentMethodsPage.expiryMonthButton.select("7");
    // Set expiry year to 2090
	SavedPaymentMethodsPage.expiryYearButton.select("2090");
    // Click Submit button
	SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
	SavedPaymentMethodsPage.paymentCompletionContent.should("contain.text", "Your card ending with 3455 has been saved for your convenience.");
	});
  });
});
