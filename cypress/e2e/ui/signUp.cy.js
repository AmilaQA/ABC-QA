import homePage from "../../pages/home-page"
import loginPage from "../../pages/login-page"
import searchPage from "../../pages/search-page"
import productPage from "../../pages/product-page"

describe('Sign Up', () => {

/*    Test case 1: Sign Up
    1. Go to: nopCommerce demo store
    2. Click on Sign in and enter login data
    3. Search for “Apple MacBook Pro 13-inch”
    4. Open product and validate all product info
*/

    before(function () {
        homePage.navigateTo();
    })

    beforeEach(function () {
        homePage.clickOnlogin();
        loginPage.login("amila@gmail.com", "123456");
        // verify successful login
        cy.get('.ico-logout').should('be.visible');
    })

    it('Search for item', () => {
        searchPage.search("Apple MacBook Pro 13-inch");

        // validate that product exists
        //cy.get('.product-title').should('be.visible');

        // Open product
        //cy.get('.product-title').click();

        productPage.clickOnProduct();
        productPage.verifyProductName().should('contain', "Apple MacBook Pro 13-inch");
        productPage.verifyProductImage().title().should('contain', "Apple");;
        // verify product details
        //cy.get('.product-name').should('be.visible');
        //cy.get('.product-name').should('contain', "Apple MacBook Pro 13-inch");

        //cy.get('#main-product-img-4').title().should('contain', "Apple");
        cy.get('.add-to-cart-button').should('be.visible');
    })



})