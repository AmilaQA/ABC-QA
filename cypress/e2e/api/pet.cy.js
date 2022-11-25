describe('Pet API tests', () => {
    const pet =
        {
            "id": 110,
            "name": "cuko",
            "category": {
                "id": 1,
                "name": "zivotinja"
            },
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                },
                {
                    "id": 6,
                    "name": "sdfgh"
                },
                {
                    "id": 8,
                    "name": "xyxyx"
                },
                {
                    "id": 10,
                    "name": "abcd"
                }

            ],
            "status": "available"
        }
    it('Create pet via POST', () => {

            cy.request("POST", "https://petstore3.swagger.io/api/v3/pet", pet).then((data) => {
                // cy.log("podaci" + JSON.stringify(data, undefined, 2))
                // cy.log("response body" + JSON.stringify(data.allRequestResponses[0]["Response Status"],undefined,2))
                // expect(data.allRequestResponses[0]["Response Status"]).to.eq(200)
               // cy.log("response body" + JSON.stringify(data.allRequestResponses[0]["Response Body"].id,undefined,2))
                //expect(data.allRequestResponses[0]["Response Body"].id).to.eq(110)
               // cy.log("response body" + JSON.stringify(data.allRequestResponses[0]["Response Body"].id,undefined,2))
              //  expect(data.allRequestResponses[0]["Response Body"].id).to.eq(pet.id)

                cy.log("response body" + JSON.stringify(data.allRequestResponses[0]["Response Body"].name,undefined,2))
                expect(data.allRequestResponses[0]["Response Body"].id).to.eq(pet.id),
                expect(data.allRequestResponses[0]["Response Body"].name).to.eq(pet.name)
                expect(data.allRequestResponses[0]["Response Body"].category.id).to.eq(pet.category.id)
                expect(data.allRequestResponses[0]["Response Body"].category.name).to.eq(pet.category.name)
                expect(data.allRequestResponses[0]["Response Body"].tags[0].id).to.eq(pet.tags[0].id)
                expect(data.allRequestResponses[0]["Response Body"].tags[0].name).to.eq(pet.tags[0].name)
                expect(data.allRequestResponses[0]["Response Body"].tags[1].id).to.eq(pet.tags[1].id)
                expect(data.allRequestResponses[0]["Response Body"].tags[1].name).to.eq(pet.tags[1].name)
              //  let a=["a","b","c","d","e","f","g","h","l"] - FOR PETLJA
                for(let i=0;i<pet.tags.length;i++){
                    cy.log(pet.tags[i])
                    expect(data.allRequestResponses[0]["Response Body"].tags[i].id).to.eq(pet.tags[i].id)
                    expect(data.allRequestResponses[0]["Response Body"].tags[i].name).to.eq(pet.tags[i].name)

                }
        })

    })
})
