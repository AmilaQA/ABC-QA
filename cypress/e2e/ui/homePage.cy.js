class HomePage{

    navigateTo(){
        cy.visit(Cypress.config().baseUrl)
    }
    clickOnMakeAppointment() {
        this.elements.makeappointmentbutton().click()
    }

    elements = {
        makeappointmentbutton: () => cy.get("#btn-make-appointment"),
    }
}

module.exports = new HomePage();