import { regPage } from "../../pageObjects/registerPage";

describe('Login Page tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[href="/register"]').click()
    })

    it('Register with valid data', () => {
        regPage.register(Cypress.env('validUserName'), Cypress.env('validEmail'), Cypress.env('validPassword'))
    })


})