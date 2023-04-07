describe('Jornadas de usuários', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça um logout', () => {
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('ana@teste.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    cy.location('pathname').should('eq', '/home')

    cy.getByData('select-opcoes').select('Transferência')
    cy.getByData('form-input').type('80')
    cy.getByData('realiza-transacao').click()

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq', '/')
  })

  it.only('Deve realizar um cadastro na aplicação e depois realizar o login', () => {
    cy.getByData('botao-cadastro').click()
    cy.getByData('nome-input').type('João')
    cy.getByData('email-input').type('joao@email.com.com')
    cy.getByData('senha-input').type('87654')
    cy.getByData('checkbox-input').check()
    cy.getByData('botao-enviar').click()

    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!');
    cy.location('pathname').should('eq', '/')

    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('joao@email.com.com')
    cy.getByData('senha-input').type('87654')
    cy.getByData('botao-enviar').click()

    cy.location('pathname').should('eq', '/home')
    cy.getByData('botao-sair').should('exist').and('have.text', 'Sair')
  })
})