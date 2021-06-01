const Sequelize = require('sequelize')
const config = require("../config/database")
const produto = require('../model/produto')

const conexao = new Sequelize(config);

produto.init(conexao);

module.exports = conexao;