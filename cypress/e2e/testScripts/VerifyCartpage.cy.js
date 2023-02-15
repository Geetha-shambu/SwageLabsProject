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
         const Ln=new Home();
         const Shop=new Cart();
    
         Login.Setuser().type(this.Logindata.username)
         Login.Setpassword().type(this.Logindata.password)
         Login.Submit().click()
         //Ln.Verifyhomepage().should('have.text',"SwagLabs")
         Ln.Productone().click()
         Ln.Product2().click()
         Ln.Cart().click()
        //verify cartpage
         Shop.VerifyCart().should('have.text','Your Cart') 
         
         

        
      })

    })

  
