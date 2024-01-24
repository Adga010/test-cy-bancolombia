import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true });

Cypress.Commands.add('validateSchema', (schema, data) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        throw new Error('Validation errors: ' + ajv.errorsText(validate.errors));
    }
});
