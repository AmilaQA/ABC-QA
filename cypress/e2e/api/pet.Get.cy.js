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
    it('GET pet via ID', () => {

            cy.request("GET","https://petstore3.swagger.io/api/v3/pet/"+pet.id).then((data) => {
                cy.log(JSON.parse(data.allRequestResponses[0]["Response Body"]).id)

                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).id).to.eq(pet.id),
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).name).to.eq(pet.name)
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).category.id).to.eq(pet.category.id)
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).category.name).to.eq(pet.category.name)
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).tags[0].id).to.eq(pet.tags[0].id)
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).tags[0].name).to.eq(pet.tags[0].name)
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).tags[1].id).to.eq(pet.tags[1].id)
                expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).tags[1].name).to.eq(pet.tags[1].name)

                for(let i=0; i<  JSON.parse(data.allRequestResponses[0]["Response Body"]).tags.length;i++)
                {
                    cy.log(pet.tags[i])
                    expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).tags[i].id).to.eq(pet.tags[i].id)
                    expect(JSON.parse(data.allRequestResponses[0]["Response Body"]).tags[i].name).to.eq(pet.tags[i].name)
                }
            })

        })

    })

