const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        category_id: Sequelize.UUID,
        contact: Sequelize.STRING,
        agency: Sequelize.STRING,
        company: Sequelize.STRING,
        deadline: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    super.beforeCreate((user, _) => {
      return (user.id = uuid());
    });
  }
  static associate(models) {
    this.belongsTo(models.Categories, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

module.exports = Orders;
