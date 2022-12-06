const Posts = require('../database/models/posts');

class PostService {
    async getAll() {
        const posts = await Posts.findAll()
        return posts;
    }

    async getOne(id) {
        const post = await Posts.findOne({where: {id}});
        if (!post) throw new Error('Post not found')
        return post;
    }

    async create(title, text, author, UserId) {
        const candidate = await Posts.findOne({where: {title}})
        if (candidate) throw new Error('Post with this title already exists')
        const newPost = await Posts.create({title, text, author, UserId})
        return newPost;
    }
}

module.exports = new PostService();