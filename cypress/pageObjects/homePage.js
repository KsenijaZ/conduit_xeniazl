class HomePage {
    get header() {
        return cy.get('app-layout-header')
    }

    // navigation bar

    get newArticleBtn() {
        return cy.get('[href="/editor"]')
    }

    get SettingsBtn() {
        return cy.get('[href="/settings"]')
    }

    get userProfileBtn() {
        return cy.get('.nav-item:last-child')
    }

    // feed toggle

    get globalFeedBtn() {
        return cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
    }

    get yourFeedBtn() {
        return cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link')
    }

}

export const homePage = new HomePage ()