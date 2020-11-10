
const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize,
    })
  }

  static associate(models) {
    this.hasOne(models.Endereco, { foreignKey: 'endereco_id', as: 'endereco' });
    this.hasMany(models.Telefone, { foreignKey: 'telefone_id', as: 'telefone' });
  }
}

module.exports = Cliente;