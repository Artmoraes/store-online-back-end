const { Category } = require('../models');

const getAllCategories = async () => {
  const cat = await Category.findAll();
  return cat;
};
module.exports = { getAllCategories };
