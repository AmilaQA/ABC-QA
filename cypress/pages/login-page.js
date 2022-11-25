class loginPage {
login(email, password){
    this.elements.email().type(email)
    this.elements.password().type(password)
    this.elements.button().click()
}
elements = {
email: ()=>cy.get('.email'),
password: ()=>cy.get('.password'),
button:()=>cy.get(".login-button")

}

}
module.exports = new loginPage ();
