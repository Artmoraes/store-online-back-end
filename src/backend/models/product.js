const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.FLOAT,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category);
  };

  return Product;
};

module.exports = ProductModel;