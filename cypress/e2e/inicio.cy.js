describe('Página inicial', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve renderizar o h1 com o texto correto', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })

  it('Deve renderizar o h2 com o texto correto', () => {
    cy.verifyText('h2','Vantagens do nosso banco:')
  })
})