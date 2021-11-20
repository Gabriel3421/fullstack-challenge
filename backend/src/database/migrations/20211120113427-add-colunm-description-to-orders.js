'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'orders',
      'description',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('orders', 'description')
  }
};
