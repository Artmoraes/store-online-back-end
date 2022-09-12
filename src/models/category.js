const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameCategory: DataTypes.STRING,
  });

  // Category.associate = (models) => {
  //   Category.hasMany(models.Products,
  //     {
  //       foreignKey: 'productId', as: 'Products',
  //     });
  // };

  return Category;
};

module.exports = CategoryModel;