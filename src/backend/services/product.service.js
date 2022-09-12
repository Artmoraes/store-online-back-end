const { Category, Product } = require('../models');


let createProduct = async (typeCategory, productInformations) => {
  const dataCategories = await Category.findAll();
  const existCategories = dataCategories.map((obj) => obj.dataValues);
  const nameCategories = existCategories.map((obj) => obj.nameCategory);
  
  const idCategories = await existCategories.find((obj) => {
    if (obj.nameCategory === typeCategory) {
      return obj;
    }
  });

  if (!(nameCategories.find((obj) => obj === typeCategory))) {
    await Category.create({
      nameCategory: typeCategory,
    }).then(cat => cat.id).catch(err => console.log(err));
  }

  await productInformations.map((obj) => Product.create(
    {
      name: obj.name,
      description: obj.description,
      value: obj.value,
      CategoryId: idCategories.id,
    }
  ).catch(err => console.log(err)));
}

const getAllProducts = async () => {
  const prod = await Product.findAll();

  return prod;
};

module.exports = { createProduct, getAllProducts };
