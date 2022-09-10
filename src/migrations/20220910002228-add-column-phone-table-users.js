// src/migrations/[timestamp]-add-column-phone-table-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phoneNum', {
      phoneNum: {
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};