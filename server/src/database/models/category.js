const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Categories = sequelize.define("Categories", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
});

module.exports = Categories;