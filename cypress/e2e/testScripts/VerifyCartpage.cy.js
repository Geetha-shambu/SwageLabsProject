/// <reference types="Cypress"/>
import Demo from "../../PageObjectModel/Sauce"
import Home from "../../PageObjectModel/Homepage"
import Cart from "../../PageObjectModel/Cartpage"

describe("new application",()=>{

})

  beforeEach(function(){

   cy.visit("https://www.saucedemo.com/")
    
  })
 it('Login page',()=>{
    cy.fixture("Sauce").then(function(data){
       this.Logindata=data
       const Login=new Demo();
       const ln=new Home();
         const shop=new Cart();
  
       Login.Setuser().type(this.Logindata.username)
       Login.Setpassword().type(this.Logindata.password)
       Login.Submit().click()
       //Ln.Verifyhomepage().should('have.text',"SwagLabs")
       ln.Productone().click()
       ln.Product2().click()
       ln.Cart().click()
      //verify cartpage
       shop.VerifyCart().should('have.text','Your Cart') 

       
    })

  })