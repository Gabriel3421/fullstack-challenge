const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Orders = require('../models/Orders');
const Categories = require('../models/Categories');


const connection = new Sequelize(dbConfig);

const models = [
  Categories,
  Orders
]

models.map(model => model.init(connection))
models.map(model => model.associate && model.associate(connection.models))


module.exports = connection;
