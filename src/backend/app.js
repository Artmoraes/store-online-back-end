// src/app.js

const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/cat', User.getAllCat);
app.post('/cat', User.productInsert);
app.get('/prod', User.getAllProd);
app.get('/user', User.getAll);
app.get('/user/:id', User.getById);
app.get('/user/search/:id', User.getByIdAndEmail);
app.post('/user', User.createUser);
app.put('/user/:id', User.updateUser);
app.delete('/user/:id', User.deleteUser);

module.exports = app;