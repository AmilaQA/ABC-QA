describe('get order API tests', () => {

    /*
    Test case 2: Get an order
1. Using https://petstore3.swagger.io/#/store/getOrderById endpoint get all details about your order
2. Validate response status code and result

     */

    const order =
        {
            "id": 3,
            "petId": 1,
            "quantity": 50,
            "shipDate": "2022-10-27T00:46:10.157+00:00",
            "status": "delivered",
            "complete": true
        }

    it('GET an order', () => {

            cy.request("GET","https://petstore3.swagger.io/api/v3/store/order/"+order.id).then((data) => {
                cy.log(JSON.parse(data.allRequestResponses[0]["Response Body"]).id)

                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).id).to.eq(order.id),
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).petId).to.eq(order.petId),
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).quantity).to.eq(order.quantity),
              expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).shipDate).to.eq(order.shipDate),
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).status).to.eq(order.status),
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).complete).to.eq(order.complete),

                expect(data.allRequestResponses[0]["Response Status"]).to.eq(200)

            })

        })

    })

