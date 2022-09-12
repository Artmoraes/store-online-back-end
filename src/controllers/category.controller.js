const CategoryService = require('../services/category.service');

const error500Message = 'Algo deu errado';

const getAllCategories = async (_req, res) => {
  try {
    const cat = await CategoryService.getAllCategories();
    return res.status(200).json(cat);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { getAllCategories };
