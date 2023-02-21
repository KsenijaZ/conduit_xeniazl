class RegisterPage {

    get userName() {
       return cy.get('[formcontrolname="username"]')
    }

    get email() {
        return cy.get('input[formcontrolname="email"]')
    }

    get password() {
        return cy.get('input[formcontrolname="password"]')
    }

    get submitBtn() {
        return cy.get('button[type="submit"]')
    }

    register(username, email, password) {
        this.userName.type(username)
        this.email.type(email)
        this.password.type(password)
        this.submitBtn.click()
    }

}

export const regPage = new RegisterPage ()