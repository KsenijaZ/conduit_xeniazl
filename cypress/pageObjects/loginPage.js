class LoginPage {

    get email() {
        return cy.get('input[formcontrolname="email"]')
    }

    get password() {
        return cy.get('input[formcontrolname="password"]')
    }

    get submitBtn() {
        return cy.get('button[type="submit"]')
    }

    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.submitBtn.click()
    }

}

export const loginPage = new LoginPage ()