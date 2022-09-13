const CategoryService = require('../services/category.service');

const getAllCategories = async (_req, res) => {
  try {
    const cat = await CategoryService.getAllCategories();
    return res.status(200).json(cat, { message: 'Todas as categorias serão listadas' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro ao listar todas as categorias' });
  }
};

module.exports = { getAllCategories };
