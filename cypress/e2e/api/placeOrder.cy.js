describe('Pet API tests', () => {

    /* Test case 1: Place an order
    1. Create a pet
    2. Using https://petstore3.swagger.io/#/store/placeOrder endpoint place an order for created pet
        3. Validate response status code and result
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
    it('Place an order', () => {

            cy.request("POST", "https://petstore3.swagger.io/api/v3/store/order", order).then((data) => {
                cy.log("response JSON body: " + JSON.stringify(data.allRequestResponses[0]["Response Body"],undefined,2))
                expect(data.allRequestResponses[0]["Response Body"].id).to.eq(order.id),
                expect(data.allRequestResponses[0]["Response Body"].petId).to.eq(order.petId)
                expect(data.allRequestResponses[0]["Response Body"].quantity).to.eq(order.quantity)
                expect(data.allRequestResponses[0]["Response Body"].shipDate).to.eq(order.shipDate)
                expect(data.allRequestResponses[0]["Response Body"].status).to.eq(order.status)
                expect(data.allRequestResponses[0]["Response Body"].complete).to.eq(order.complete),

                expect(data.allRequestResponses[0]["Response Status"]).to.eq(200)

                })
        })

    });
