import { homePage } from "../../pageObjects/homePage";
import { loginPage } from "../../pageObjects/loginPage";
import { newArticle } from "../../pageObjects/newArticle";

describe('New Article tests', () => {

    before(() => {
        cy.loginToApp()
    })


    // let articleSlug = 0;
    // let userNameId = 0;

    // it('publish and delete published article', () => {

    //         homePage.newArticleBtn.click()
    //         cy.intercept('POST', 'https://api.realworld.io/api/articles/').as('publishArticle')
    //             newArticle.articleTitle.type('New Title' + " " + Math.floor(Math.random() * 100))
    //             newArticle.articleDescr.type('article descriptive text')
    //             newArticle.articleBody.type('I have added additional assertions to check the value of the placeholder attribute.')
    //             newArticle.articleTags.type('myTag')
    //             newArticle.publishBtn.click()
    //         cy.wait('@publishArticle').then( result => {
    //                 expect(result.response.statusCode).to.equal(200)
    //                 expect(result.request.body.article.description).to.equal('article descriptive text')
    //                 console.log(result)
    //                 articleSlug = result.response.body.article.slug;
    //                 userNameId = result.response.body.article.author.username;
    //                 cy.log(articleSlug)
    //                 cy.log(userNameId)
    //         })

    //         cy.get('.article-actions > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-danger').click({force:true})
    //         cy.get(':nth-child(4) > .nav-link').click()

    // })

    // it('Check if is deleted', () => {

    // cy.visit('/')
    // cy.get('[href="/login"]').click()
    // loginPage.login(Cypress.env('validEmail'), Cypress.env('validPassword'))

    //  cy.intercept('GET', `https://api.realworld.io/api/articles?author*`).as('myPosts')

    //  cy.get(':nth-child(4) > .nav-link').click()
    //  cy.get('.articles-toggle > .nav > :nth-child(1) > .nav-link')

    //  cy.wait('@myPosts').then( profileResult => {
    //     expect(profileResult.response.statusCode).to.eq(200)
    //     expect(profileResult.response.body.articles[0].slug).not.to.equal(articleSlug)

    //  })
     

    // })

    it('publish and delete published article via cypress api', () => {


        const postTitle = 'Post title test' + Math.floor(Math.random()*100)

        const bodyRequest = {  
                "article": {
                    "tagList": [],
                    "title": postTitle,
                    "description": "api testing",
                    "body": "via postman and cypress"
                }
        }

        cy.get('@token').then( token => {
      
            cy.request({
                url: Cypress.env("apiUrl")+'/api/articles/',
                headers: { 'Authorization': 'Token '+token},
                method: 'POST',
                body: bodyRequest
            }).then( response => {
                expect(response.status).to.equal(200)
            })

            cy.contains('Global Feed').click()
            cy.get('.article-preview').first().click()
            cy.get('.article-actions .btn-outline-danger').click()
            cy.contains('Global Feed').click()

            cy.request({
                url: Cypress.env("apiUrl")+'/api/articles?limit=10&offset=0',
                headers: { 'Authorization': 'Token '+token},
                method: 'GET'
            }).its('body').then( body => {
                cy.log(body)
                expect(body.articles[0].title).not.to.equal(postTitle)
            })

        })

    })

})