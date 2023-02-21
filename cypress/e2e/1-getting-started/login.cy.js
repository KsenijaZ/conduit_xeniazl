import { loginPage } from "../../pageObjects/loginPage";

describe('Login Page tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[href="/login"]').click()
    })

    it('Login with valid data', () => {
        loginPage.login(Cypress.env('validEmail'), Cypress.env('validPassword'))
    })


})