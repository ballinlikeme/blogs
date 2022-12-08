const Users = require('./models/users');
const Posts = require('./models/posts');
const Categories = require('./models/category');
const PostsCategories = require('./models/postsCategories');

Users.hasMany(Posts)
Posts.belongsTo(Users)
Categories.hasMany(Posts);
Posts.belongsToMany(Categories, {
    through: PostsCategories,
})

module.exports = {Users, Posts, Categories, PostsCategories}