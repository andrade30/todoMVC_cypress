import telaInicial from '../../support/pageObjects/tela_inicial.page'

describe('Deletar itens da lista', () => {
    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(() => {
        cy.visit('/')
        var todoItens = ['Maça', 'Banana', 'Cenoura']

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })

    /**
     * Clicar no filtro 
     * o item ser exibido
     * e o contador deve bater a informação
     */
    it('deleção de um item da lista', () => {
        telaInicial.deletarItem()
    });
});