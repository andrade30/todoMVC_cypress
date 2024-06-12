/**
 * Feature -> describe
 * background -> contexto ou beforeEach
 * caso de teste -> it
 */

import telaInicial from '../../support/pageObjects/tela_inicial.page'
describe('Acessar a página do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    telaInicial.inputText()
  })
})