describe('Abertura de Conta Banco Inter', () => {
  it('Teste Positivo', () => {
    cy.visit('https://inter.co/')
    //cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
    cy.contains('Abra sua conta grátis').should('be.visible').click()
    cy.get('[name="name"]').should('be.visible').type('Kennedy Oliveira')
    cy.get('[name="phone"]').should('be.visible').type('61982148152')
    cy.get('[name="email"]').should('be.visible').type('kennedy.oliver@live.com')
    cy.get('[name="socialId"]').should('be.visible').type('07189278508')
    cy.get('[name="dateOfBirth"]').should('be.visible').type('26121998')
    cy.xpath('//label[@aria-label="Campo de aceite"]').should('be.visible').click()
    cy.contains('Continuar').should('be.visible').click()
    cy.contains('Prontinho! Recebemos os seus dados.').invoke('text').should('eq', 'Prontinho! Recebemos os seus dados.')

  })
})