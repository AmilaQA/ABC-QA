class confirmationPage {

    elements = {
        summary: () => cy.get("#summary"),
        facilityconfirmation: () => cy.get("#facility"),
        readmissionconfirmation: () => cy.get("#hospital_readmission"),
        programconfirmation: () => cy.get("#program"),
        dateconfirmation: () => cy.get("#visit_date"),
        comment: () => cy.get("#comment"),
        goHomeButton: () => cy.get(".btn.btn-default")
    }

    isSummaryVisible() {
        this.elements.summary().should('be.visible')
    }
    isUrlCorrect() {
        cy.url().should('include', '/appointment.php#summary')
    }
    isShortDescriptionCorrect1(){
        this.elements.summary().should("include.text","Appointment Confirmation")
    }
    isShortDescriptionCorrect2(){
        this.elements.summary().should("include.text","Please be informed that your appointment has been booked as following")
    }
    isGoHomeVisible(){
        this.elements.goHomeButton().should("have.text","Go to Homepage")
    }

}

module.exports = new confirmationPage();