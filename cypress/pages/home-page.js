class HomePage {

navigateTo(){
cy.visit(Cypress.config().baseUrl)
}

clickOnlogin(){

this.elements.login().click()
}

elements = {
login:()=>cy.get('.ico-login'),
}
}

module.exports = new HomePage ();