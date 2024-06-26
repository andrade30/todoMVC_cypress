const elem = require('../elements/tela_inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela_inicial.elements').ITENS
const filtroItem = require('../elements/tela_inicial.elements').FILTROS

class telaInicial{
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .last().click()
    }

    filtrarItem(menu){
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    validarContador(numero){
        cy.get(filtroItem.contador)
        .contains(numero)
        // .should('have.text', numero)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }
}

export default new telaInicial();