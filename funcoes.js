/*******************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Gabriel José
 * Versão: 1.0
 * 
 * ****************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: 'Gabriel José' };
const dados = require('./estados_cidades.js');

//Retorna todos os estados
const getAllEstados = function () {
    //Variavel de base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: 'Gabriel José', uf: [] };

    //Loop
    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla);
    });

    //Para adicionar um elemento novo no JSON
    message.quantidade = message.uf.length;

    if (message.uf.length > 0) {
        return message; //Saida verdadeira (200)
    } else {
        return MESSAGE_ERRO; //Saida falsa (500)
    }

}

//Retorna um estado pesquisando pela sigla (UF)
const getEstadoBySigla = function (sigla) {
    let message = { status: true, status_code: 200, development: 'Gabriel José' }

    dados.listaDeEstados.estados.find(function (item) {
        if (item.sigla === sigla.toUpperCase()) {
            message.uf = item.sigla;
            message.descricao = item.nome;
            message.capital = item.capital;
            message.regiao = item.regiao;
        }
    });

    if (message.uf.length > 0 && message.descricao.length > 0 && message.capital.length > 0 && message.regiao.length > 0) {
        return message; //Saida verdadeira (200)
    } else {
        return MESSAGE_ERRO; //Saida falsa (500)
    }
}

//Retorna a capital referente a um estado pesquisando pela sigla (UF)
const getCapitalBySigla = function (sigla) {
    let message = { status: true, status_code: 200, development: 'Gabriel José' };

    dados.listaDeEstados.estados.find(function (item) {
        if (item.sigla === sigla.toUpperCase()) {
            message.uf = item.sigla;
            message.descricao = item.nome;
            message.capital = item.capital;
        }
    });

    if (message.uf.length > 0 && message.descricao.length > 0 && message.capital.length > 0) {
        return message; //Saida verdadeira (200)
    } else {
        return MESSAGE_ERRO; //Saida falsa (500)
    }
}

//Retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function (regiao) {
    let message = { status: true, status_code: 200, development: 'Gabriel José' };

    dados.listaDeEstados.estados.find(function (item) {
        if (item.regiao.toUpperCase() === regiao.toUpperCase()) {
            message.regiao = item.regiao;
            message.estados.push({uf: item.sigla, descricao: item.nome});
        }
    });

    if (message.regiao.length > 0) {
        return message; //Saida verdadeira (200)
    } else {
        return MESSAGE_ERRO; //Saida falsa (500)
    }
}

getEstadosByRegiao('Leste');

//Retorna uma lista de estados referente as capitais do país
const getVerifyCapitaisDoPais = function () {

}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {

}

//console.log(getAllEstados());

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,

}