describe('delete order API tests', () => {

    /*
        Test case 3: Delete an order
        1. Using https://petstore3.swagger.io/#/store/deleteOrder endpoint delete previously created order
        2. Validate response status code and result
     */

    const order =
        {
            "id": 35,
            "petId": 555555,
            "quantity": 5,
            "shipDate": "2022-10-26T17:31:30.635+00:00",
            "status": "approved",
            "complete": true
        }

    it('DELETE an order', () => {
            cy.request("DELETE","https://petstore3.swagger.io/api/v3/store/order/"+order.id).then((data) => {
                //cy.log("response JSON body: " + JSON.stringify(data.allRequestResponses[0]["Response Body"],undefined,2))

                expect(data.allRequestResponses[0]["Response Status"]).to.eq(200)
            })
        })
    })

