class appointmentPage {

    // const tomorrow = new Date(); // The Date object returns today's timestamp tomorrow.
    // setDate(tomorrow. getDate() + 1)

    elements = {
        facility: () => cy.get("#combo_facility"),
        readmission: () => cy.get('#chk_hospotal_readmission'),
        program1: () => cy.get('#radio_program_medicare'),
        program2: () => cy.get('#radio_program_medicaid'),
        program3: () => cy.get('#radio_program_mnone'),
        visitdate: () => cy.get('#txt_visit_date'),
        comment: () => cy.get('#txt_comment'),
        button: () => cy.get('#btn-book-appointment')
    }

    selectFacility(facility){
        this.elements.facility().select(facility)
    }
    selectAdmission(biraj){
        this.elements.readmission().check(biraj)
    }
    selectProgram1(){
        this.elements.program1().click()
    }
    selectProgram2(){
        this.elements.program2().click()
    }
    selectProgram3(){
        this.elements.program3().click()
    }
    selectDate(datum){
        this.elements.visitdate().type(datum)
    }
    typeComment(comment){
        this.elements.comment().click({force:true})
        this.elements.comment().type(comment)
    }
    pressButton() {
        this.elements.button().click()
    }
}

module.exports = new appointmentPage();

