import { loginPage } from "../../pageObjects/loginPage";

describe('Tags tests', () => {

    before(() => {
        cy.intercept('GET', '/api/tags', {fixture: 'tags.json'})
        cy.visit('/')
        cy.get('[href="/login"]').click()
        loginPage.login(Cypress.env('validEmail'), Cypress.env('validPassword'))
    })

    it(' Verify popular tags display', () => {
        cy.get('.tag-list')
        .should('contain', 'cypress')
        .should('contain', 'automation')
        .should('contain', 'testing')
        .should('contain', 'project')

    })


})