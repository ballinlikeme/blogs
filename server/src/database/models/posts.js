const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Posts = sequelize.define("Posts", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING}
});

module.exports = Posts;