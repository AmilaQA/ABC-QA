import homePage from "../../pages/home-page"
import loginPage from "../../pages/login-page"
import searchPage from "../../pages/search-page"

describe('validate number of items', () => {

/*   Test case:3  Validate number of items in “Camera and photo” sections
    1. Go to: https://demo.nopcommerce.com/
    2. Click on Sign in and enter login data
    3. From menu click on “Electronics”
    4. In submenu click “Camera and photo”
    5. Validate number of items is 3
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

    it('Validate number of items passes', () => {
        //cy.get('a[href="/electronics"]').find('a[href="/camera-photo"]').click();
        cy.get('.top-menu.notmobile').contains('Camera & photo').click({force: true});
        cy.get('.item-grid').find('.item-box').should('have.length', 3);
    })
})