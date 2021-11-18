'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: '4c1e68cd-51a4-496d-b47d-c458cbb41bbf',
        name: 'Hidráulica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '541ff7bf-b675-42ba-9412-dd385bf16051',
        name: 'Elétrica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '94db4ace-1f20-47d9-957e-74771a0d2465',
        name: 'Infiltração',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '63bd71b0-eacd-44ee-aade-e158ba38869d',
        name: 'Retirada de mobília',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
