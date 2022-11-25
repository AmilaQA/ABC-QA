import homePage from "../../pages/home-page"
import loginPage from "../../pages/login-page"

describe('empty spec', () => {
  it('passes', () => {
      homePage.navigateTo()
      homePage.clickOnlogin()
      loginPage.login("test@gmail.com", "testtest")
      //cy.visit('https://demo.nopcommerce.com')
      //cy.get('.ico-login').click()
      //cy.get('.email').type('armin@gmail.com')
      //cy.get('.password').type("00000000")
      //cy.get(".button-1.login-button").click()
      //cy.get('.ico-logout').should('be.visible');
      })

      it('loginFailed', () => {
        homePage.navigateTo()
        homePage.clickOnlogin()
        loginPage.login("test@gmail.com", "testtest2")

        cy.get('.message-error').should('be.visible');

        //cy.visit('https://demo.nopcommerce.com')
        //cy.get('.ico-login').click()
        //cy.get('.email').type('armin@gmail.com')
        //cy.get('.password').type("00000000")
        //cy.get(".button-1.login-button").click()
        //cy.get('.ico-logout').should('be.visible');
        })
  
})