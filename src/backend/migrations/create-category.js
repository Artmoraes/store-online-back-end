'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameCategory: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_category',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // productId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   field: 'product_id',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Products',
      //     key: 'id',
      //   }
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};