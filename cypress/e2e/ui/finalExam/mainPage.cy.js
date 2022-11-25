import homePage from "../../pages/HomePage"
import loginPage from "../../pages/LoginPage"
import appointmentPage from "../../pages/AppointmentPage"
import confirmationPage from "../../pages/ConfirmationPage"

describe('CURA Healthcare Service UI Test', () => {

    let user = "John Doe"
    let pw = "ThisIsNotAPassword"
    let ustanova = "Seoul CURA Healthcare Center";
    let readmission = true;
    let osiguranje = "Medicare";
    let datum = "29/10/2022"; //format dd/mm/gggg
    let komentar = "Nisam dobar kume.";

    it('Make an apointment', () => {
        homePage.navigateTo()
        homePage.clickOnMakeAppointment()
        loginPage.typeEmail(user)
        loginPage.typePassword(pw)
        loginPage.clickOnButton()
        cy.url().should('include', '/#appointment')
        appointmentPage.selectFacility(ustanova)
        appointmentPage.selectAdmission({force: readmission})

        if(osiguranje=="Medicare") appointmentPage.selectProgram1()
        if(osiguranje=="Medicaid") appointmentPage.selectProgram2()
        if(osiguranje=="None") appointmentPage.selectProgram3()

        appointmentPage.selectProgram1()
        appointmentPage.selectDate(datum)
        appointmentPage.typeComment(komentar)
        appointmentPage.pressButton()
        confirmationPage.isUrlCorrect()
        confirmationPage.isSummaryVisible()
        confirmationPage.isShortDescriptionCorrect1()
        confirmationPage.isShortDescriptionCorrect2()
        confirmationPage.elements.facilityconfirmation().should("have.text", ustanova)

        if(readmission==true) confirmationPage.elements.readmissionconfirmation().should("have.text", "Yes")
        if(readmission==false) confirmationPage.elements.readmissionconfirmation().should("have.text", "No")

        confirmationPage.elements.programconfirmation().should("have.text", osiguranje)
        confirmationPage.elements.dateconfirmation().should("have.text", datum)
        confirmationPage.elements.comment().should("have.text", komentar)
        confirmationPage.isGoHomeVisible()
    })
})
