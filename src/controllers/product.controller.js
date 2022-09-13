const ProductService = require('../services/product.service');

const getAllProducts = async (_req, res) => {
  try {
    const Prod = await ProductService.getAllProducts();
    return res.status(200).json(Prod, { message: 'Listando todos os produtos' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const productInsert = async (req, res) => {
  const { nameCategory } = req.body;
  try {
    const cat = await ProductService.createProduct(nameCategory, [req.body]);
    return res.status(200).json(cat, { message: 'Produto criado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await ProductService.getEspecificProduct(id);

    if (!user) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado ao buscar o produto' });
  }
};

module.exports = { productInsert, getAllProducts, getProductById };
