describe('login user API tests', () => {

    /*
        Test case 4: Login with two different users
1. Using https://petstore3.swagger.io/#/user/loginUser endpoint login
2. Validate response status code and that session id is returned
3. Repeat steps for another user
Note: Use any login data, since this is dummy API there is no actual check whether user has permission to login or not.

     */

    const user1 =
        {
            "username": "Amila",
            "password": "Test123"
        };

    const user2 =
        {
            "username": "Amila2",
            "password": "Test123456"
        }

    it('user login', () => {
        //cy.request("GET","https://petstore3.swagger.io/api/v3/user/login?username=" + user1.username + "&password=" + user1.password).then((data) => {
        cy.request("GET", "https://petstore3.swagger.io/api/v3/user/login", {
            qs: {
                username: user1.username,
                password: user1.password,
            },
        }).then((data) => {

            cy.log("response body: " + JSON.stringify(data.allRequestResponses[0]["Response Body"], undefined, 2))

            expect(data.allRequestResponses[0]["Response Status"]).to.eq(200)
            expect(data.allRequestResponses[0]["Response Body"]).to.contain("Logged in user session")

//https://petstore3.swagger.io/api/v3/user/login?username=Amila2&password=Test123456

            cy.request("GET", "https://petstore3.swagger.io/api/v3/user/login", {
                qs: {
                    username: user2.username,
                    password: user2.password,
                },
            }).then((data) => {

                cy.log("response body: " + JSON.stringify(data.allRequestResponses[0]["Response Body"], undefined, 2))

                expect(data.allRequestResponses[0]["Response Status"]).to.eq(200)
                expect(data.allRequestResponses[0]["Response Body"]).to.contain("Logged in user session")
            })
        })
    })
})

