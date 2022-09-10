// src/services/user.service.js

const { User, Category, Product } = require('../models');

const getAllCat = async () => {
  const cat = await Category.findAll();

  return cat;
};

let createCatWithProds = async (catObj, prodArr) => {
  let catId = await Category.create({
    nameCategory: catObj,
  }).then(cat => cat.id).catch(err => console.log(err));
  await prodArr.map((obj) => Product.create({
    name: obj.name,
    description: obj.description,
    value: obj.value,
    CategoryId: catId,
  }).catch(err => console.log(err))
);
  return;
}

const getAllProd = async () => {
  const prod = await Product.findAll();

  return prod;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
};

const createUser = async (fullName, email, phoneNum) => {
  const newUser = await User.create({ fullName, email, phoneNum });

  return newUser;
};

const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedUser); // confira o que é retornado quando o user com o id é ou não encontrado;  
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );

  console.log(user); // confira o que é retornado quando o user com o id é ou não encontrado;
  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser, getAllCat, createCatWithProds, getAllProd
};
