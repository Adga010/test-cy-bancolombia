import { generarNumeroAleatorio, generarNumeroAleatorioMenor, generarNumeroAleatorioMayor, generarDiasAleatorios, generarDiasMenor, generarDiasMayor } from './funtion-banco';
import 'cypress-plugin-tab'

describe('Prueba en Google y navegación a Bancolombia', () => {

    let diasAleatorio, numeroAleatorio;

    // Configuramos el estado inicial para cada prueba aquí
    beforeEach(() => {
        // Ignorar excepciones de errores no capturados provenientes de la aplicación
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Previene que Cypress falle la prueba
        });
        // Visitamos la página del simulador antes de cada prueba
        cy.visit('https://www.bancolombia.com/personas/productos-servicios/inversiones/cdts/inversion-virtual/simulador-inversion-virtual');

        diasAleatorio = generarDiasAleatorios();

        numeroAleatorio = generarNumeroAleatorio();


        // Acciones comunes que se ejecutan antes de cada prueba
        cy.get('#boton-seleccion-tarjeta').click();
        // Generar número de días aleatorio
        cy.get('#opcion-si > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true });
    });

    describe('Validación de inputs.', () => {
        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor menor a $500,000', () => {
            const numeroAleatorioMenor = generarNumeroAleatorioMenor();
            cy.get('#valor-simulacion').type(numeroAleatorioMenor.toString()).tab();
            cy.get('#valor-plazo').type(diasAleatorio.toString());
            cy.get('#boton-simular').should('be.disabled');
        });

        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor mayor a $10,000,000,000', () => {
            const numeroAleatorioMayor = generarNumeroAleatorioMayor();
            cy.get('#valor-simulacion').type(numeroAleatorioMayor.toString()).tab();
            cy.get('#valor-plazo').type(diasAleatorio.toString());
            cy.get('#boton-simular').should('be.disabled');
        });

        it('Debe validar que se encuentre habilitado el boton al incluir un valor igual a $500,000', () => {
            cy.get('#valor-simulacion').type('500000').tab();
            cy.get('#valor-plazo').type(diasAleatorio.toString());
            cy.get('#boton-simular').should('not.be.disabled');
        });

        it('Debe validar que se encuentre habilitado el boton al incluir un valor igual a $10,000,000,000', () => {
            cy.get('#valor-simulacion').type('10000000000').tab();
            cy.get('#valor-plazo').type(diasAleatorio.toString());
            cy.get('#boton-simular').should('not.be.disabled');
        });

        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor igual a $10,000,000,001', () => {
            cy.get('#valor-simulacion').type('10000000001').tab();
            cy.get('#valor-plazo').type(diasAleatorio.toString());
            cy.get('#boton-simular').should('be.disabled');
        });

        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor igual a $499,999', () => {
            cy.get('#valor-simulacion').type('499999').tab();
            cy.get('#valor-plazo').type(diasAleatorio.toString());
            cy.get('#boton-simular').should('be.disabled');
        });
    });

    describe('Validación de Inputs dias.', () => {
        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor menor a 30 dias', () => {
            const numeroDiasMenor = generarDiasMenor();
            cy.get('#valor-simulacion').type(numeroAleatorio.toString()).tab();
            cy.get('#valor-plazo').type(numeroDiasMenor.toString());
            cy.get('#boton-simular').should('be.disabled');
        });

        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor mayor a 1800 dias', () => {
            const numeroDiasMayor = generarDiasMayor();
            cy.get('#valor-simulacion').type(numeroAleatorio.toString()).tab();
            cy.get('#valor-plazo').type(numeroDiasMayor.toString());
            cy.get('#boton-simular').should('be.disabled');
        });

        it('Debe validar que se encuentre habilitado el boton al incluir un valor igual a 30 dias', () => {
            cy.get('#valor-simulacion').type(numeroAleatorio.toString()).tab();
            cy.get('#valor-plazo').type('30').tab();
            cy.get('#boton-simular').should('not.be.disabled');
        });

        it('Debe validar que se encuentre habilitado el boton al incluir un valor igual a 1800 dias', () => {
            cy.get('#valor-simulacion').type(numeroAleatorio.toString()).tab();
            cy.get('#valor-plazo').type('1800').tab();
            cy.get('#boton-simular').should('not.be.disabled');
        });

        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor igual a 1801', () => {
            cy.get('#valor-simulacion').type(numeroAleatorio.toString()).tab();
            cy.get('#valor-plazo').type('1801').tab();
            cy.get('#boton-simular').should('be.disabled');
        });

        it('Debe validar que se encuentre inhabilitado el boton al incluir un valor igual a 29', () => {
            cy.get('#valor-simulacion').type(numeroAleatorio.toString()).tab();
            cy.get('#valor-plazo').type('29').tab();
            cy.get('#boton-simular').should('be.disabled');
        });
    });


    it('Realizar una simulación con opción "Mensualmente"', () => {
        const numeroAleatorio = generarNumeroAleatorio();
        const diasAleatorio = generarDiasAleatorios();

        cy.get('#valor-simulacion').type(numeroAleatorio.toString());
        cy.get('#valor-plazo').type(diasAleatorio.toString());
        cy.get('.mat-select-arrow-wrapper', { timeout: 10000 }).click();
        cy.contains('span.mat-option-text', 'Mensualmente').click();
        // Suponiendo que el botón para simular tiene el id 'boton-simular'
        cy.get('#boton-simular').click();
    });

    it('Realizar una simulación con opción "Al finalizar el plazo"', () => {
        const numeroAleatorio = generarNumeroAleatorio();
        const diasAleatorio = generarDiasAleatorios();

        cy.get('#valor-simulacion').type(numeroAleatorio.toString());
        cy.get('#valor-plazo').type(diasAleatorio.toString());
        cy.get('.mat-select-arrow-wrapper', { timeout: 10000 }).click();
        cy.contains('span.mat-option-text', 'Al finalizar el plazo').click();
        cy.get('#boton-simular').click();
    });

    
});
