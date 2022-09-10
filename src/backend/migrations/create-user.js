// 'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      fullName: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE, },
      phoneNum: { type: Sequelize.STRING, allowNull: false, },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
    /**
 * Add reverting commands here.
 *
 * Example:
 */
  },
};
