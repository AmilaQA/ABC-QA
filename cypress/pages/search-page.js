class searchPage {

    search(text){
        this.elements.textBox().type(text)
        this.elements.button().click()
    }

    elements = {
        textBox: ()=>cy.get('.search-box'),
        button:()=>cy.get(".search-box-button")
    }
}
module.exports = new searchPage ();
