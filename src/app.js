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

// app.use((err, _req, res, _next) => {
//   const { name, message } = err;
//   switch (name) {
//     case 'ValidationError':
//       res.status(400).json({ message });
//       break;
//     case 'NotFoundError':
//       res.status(404).json({ message });
//       break;
//     case 'ConflictError':
//       res.status(409).json({ message });
//       break;
//     case 'UnauthorizedError':
//       res.status(401).json({ message });
//       break;
//     default:
//       res.status(500).json({ message });
//       break;
//   }
// });

module.exports = app;