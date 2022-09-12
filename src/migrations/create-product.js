'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false, },
      description: { type: Sequelize.STRING, allowNull: false, },
      value: { type: Sequelize.FLOAT, allowNull: false, },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      
      // categoriesId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   field: 'category_id',
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Categories',
      //     key: 'id',
      //   }
      // }
    });
  },
  
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Products');
  },
};