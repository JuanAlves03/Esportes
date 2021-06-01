const { Model, DataTypes } = require('sequelize')

class produto extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            valor: DataTypes.DOUBLE,
            tipo: DataTypes.STRING
        },{sequelize,tableName:'produtos',})
    }
}

module.exports = produto;