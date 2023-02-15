
class Demo{

    Setuser()
    {
      return cy.get("#user-name")
    }

    Setpassword()

    {
       return cy.get("#password")
    }

    Submit()
    {
        return cy.get('[type="submit"]')
    }

}

export default Demo;