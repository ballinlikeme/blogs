const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const PostsCategories = sequelize.define("posts_categories", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

module.exports = PostsCategories;