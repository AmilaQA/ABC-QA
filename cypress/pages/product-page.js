class productPage {

    clickOnProduct(){
        this.elements.title().click()
    }

    verifyProductName()
    {
        return this.elements.name();
    }

    verifyProductImage()
    {
        return this.elements.image();
    }

    elements = {
        name:()=>cy.get(".product-name"),
        title:()=>cy.get(".product-title"),
        image:()=>cy.get("#main-product-img-4")
    }

}
module.exports = new productPage();
