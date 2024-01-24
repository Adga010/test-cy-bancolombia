describe('API Test - reqres.in GET', () => {
    it('Validar la respuesta del API', () => {
        const schema = {
            // No aplica, ya que estoy validando todo el esquema.
        };

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
        }).then((response) => {
            // Validación Status Code
            expect(response.status).to.eq(200);

            // Validación de los valores específicos
            expect(response.body.page).to.eq(2);
            expect(response.body.total).to.eq(12);

            // Imprimir json validar respuesta
            const responseString = JSON.stringify(response.body, null, 4);
            cy.log('Respuesta: ' + responseString);
            // Validación del Esquema
            cy.validateSchema(schema, response.body);
        });
    });
});

describe('API Test - reqres.in POST', () => {
    it('Validar la respuesta del API para un POST', () => {
        const userData = {
            name: "Prueba",
            job: "Automatizacion"
        };

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: userData
        }).then((response) => {
            // Validación del Status Code
            expect(response.status).to.eq(201);

            // Validación de los valores específicos en la respuesta
            expect(response.body.name).to.eq(userData.name);
            expect(response.body.job).to.eq(userData.job);

            // Opcional: Imprimir la respuesta en el log para verificación
            const responseString = JSON.stringify(response.body, null, 4);
            cy.log('Respuesta: ' + responseString);
        });
    });
});
