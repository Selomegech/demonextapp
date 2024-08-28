describe('Navigation', () => {
    it('should navigate to the dashboard page then back to signin when clicked', () => {
      // Start from the index page
      cy.visit('http://localhost:3001/')
   
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="login"]').click()
   
      // The new url should include "/about"
      cy.url().should('include', '/login')
   
      // The new page should contain an h1 with "About"
      cy.get('h1').contains('Welcome back,')
    })
  })