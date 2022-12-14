const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Posts = sequelize.define("Posts", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.TEXT},
    text: {type: DataTypes.TEXT, allowNull: false},
    author: {type: DataTypes.STRING}
});

module.exports = Posts;