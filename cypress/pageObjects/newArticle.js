class NewArticle {
    get articleTitle() {
        return cy.get('[formcontrolname="title"]')
    }

    get articleDescr() {
        return cy.get('[formcontrolname="description"]')
    }

    get articleBody() {
        return cy.get('[formcontrolname="body"]')
    }

    get articleTags() {
        return cy.get('[placeholder="Enter tags"]')
    }
    
    get publishBtn() {
        return cy.get('button')
    }

    get deleteBtn() {
        return cy.get('.article-meta button')
    }



}

export const newArticle = new NewArticle ()