describe('Formulário Cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click()
    cy.getByData('nome-input').type('Ana')
    cy.getByData('email-input').type('anateste@teset.test')
    cy.getByData('senha-input').type('12345')
    cy.getByData('checkbox-input').check()
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
  })

  it.only('Verifica nome inválido', () => {
    cy.getByData('botao-cadastro').click()
    cy.getByData('email-input').type('joao@email.com')
    cy.getByData('senha-input').type('987654')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
  })
})