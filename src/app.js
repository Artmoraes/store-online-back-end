// src/app.js

const express = require('express');
const cors = require('cors');

const User = require('./controllers/user.controller');
const Product = require('./controllers/product.controller');
const Category = require('./controllers/category.controller');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/categories', Category.getAllCategories);
app.post('/categories', Product.productInsert);
app.get('/products', Product.getAllProducts);
app.get('/products/:id', Product.getProductById);
app.get('/user', User.getAll);
app.get('/user/:id', User.getById);
app.get('/user/search/:id', User.getByIdAndEmail);
app.post('/user', User.createUser);
app.put('/user/:id', User.updateUser);
app.delete('/user/:id', User.deleteUser);

module.exports = app;