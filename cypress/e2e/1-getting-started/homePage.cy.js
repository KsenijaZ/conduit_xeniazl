import { loginPage } from "../../pageObjects/loginPage";
import { homePage } from "../../pageObjects/homePage";

describe('Login Page tests', () => {

    beforeEach(() => {
        //cy.intercept('GET', '/api/tags', {fixture: 'tags.json'})
        cy.intercept({method: 'Get', path: 'tags'}, {fixture: 'tags.json'})
        cy.visit('/')
        cy.get('[href="/login"]').click()
        loginPage.login(Cypress.env('validEmail'), Cypress.env('validPassword'))
    })

    it('Basic UI check', () => {
        homePage.header.should('be.visible')
        homePage.globalFeedBtn.should('be.visible')
        homePage.yourFeedBtn.should('be.visible')
    })

    it.only('Global feed test', () => {
        cy.intercept('GET', '/api/articles/feed*', {"articles":[],"articlesCount":0})
        cy.intercept('GET', '/api/articles*', {fixture: 'articles.json'}).as('artList')
  
        homePage.globalFeedBtn.click()
        cy.get('app-article-list button').then( heartList => {
            expect(heartList[0]).to.contain('1')
            expect(heartList[1]).to.contain('5')
        })


        cy.fixture('articles').then( file => {
            const artLink = file.articles[1].slug
            file.articles[1].favoritesCount = 6

            cy.intercept('POST', '/api/articles/'+artLink+'/favorite', file)
        })

        cy.get('app-article-list button').eq(1).click().should('contain', '6')
    })

    


})