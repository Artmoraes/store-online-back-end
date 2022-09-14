const { Category, Product } = require('../models');

// eslint-disable-next-line max-lines-per-function
const createProduct = async (typeCategory, product) => {
  const dataCategories = await Category.findAll();
  const existCategories = dataCategories.map((obj) => obj.dataValues);
  const nameCategories = existCategories.map((obj) => obj.nameCategory);

  const idCategories = await existCategories.find((obj) => obj.nameCategory === typeCategory);

  if (!(nameCategories.find((obj) => obj === typeCategory))) {
    await Category.create({
      nameCategory: typeCategory,
    }).then((cat) => cat.id).catch((err) => console.log(err));
  }

  await Product.create({
    name: product.name,
    description: product.description,
    value: product.value,
    CategoryId: idCategories.id,
  });
};

const getAllProducts = async () => {
  const prod = await Product.findAll();

  return prod;
};

const getEspecificProduct = async (id) => {
  const product = Product.findByPk(id);
  console.log(product);
  return product;
};

module.exports = { createProduct, getAllProducts, getEspecificProduct };
