Cypress.Commands.add('getByData', (data) => cy.get(`[data-test="${data}"]`))

Cypress.Commands.add('verifyText', (selector, text) => cy.get(selector).contains(text))