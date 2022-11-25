import homePage from "../../pages/home-page"
import loginPage from "../../pages/login-page"
import searchPage from "../../pages/search-page"

describe('Advanced search', () => {

/*   Test case 2: Advanced search
    1. Go to: https://demo.nopcommerce.com/
    2. Click on Sign in and enter login data
    3. Search for “Apple MacBook Pro 13-inch”
    4. Click on Advanced search
    5. In Category choose “Computers>> Notebooks”
    6. Validate “Apple MacBook Pro 13-inch” is returned as result
    7. Change category to “Computers>> Software”
    8. Validate No data returned.
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

    it('Advanced search', () => {
        searchPage.search("Apple MacBook Pro 13-inch");

        // validate that product exists
        //cy.get('.product-title').should('be.visible');

        // click advance search
        cy.get('#advs').click();

        // select “Computers>> Notebooks”
        cy.get('#cid').select('3');
        cy.get('.button-1.search-button').click()

        //Validate “Apple MacBook Pro 13-inch” is returned as result
        cy.get('.product-title').should('contain', "Apple MacBook Pro 13-inch")

        //Change category to “Computers>> Software”
        cy.get('#cid').select('4')
        cy.get('.button-1.search-button').click()

        //Validate No data returned.
        cy.get('.no-result').should('be.visible')
    })
})