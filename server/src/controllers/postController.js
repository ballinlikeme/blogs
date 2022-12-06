const postService = require('../services/postService');

class PostController {
    async getAll(req, res) {
        try {
            const posts = await postService.getAll();
            return res.json(posts);
        }catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.body;
            const post = await postService.getOne(id);
            return res.json({ post });
        }catch (e) {
            console.log(e);
        }
    }

    async create(req, res) {
        try {
            const {title, text, author, description, UserId, CategoryId} = req.body
            const post = await postService.create(title, text, author, description, UserId, CategoryId);
            return res.json(post)
        }catch (e) {
            console.log(e);
        }
    }

    async getPostsInCategory(req, res) {
        try {
            const {categoryId} = req.body;
            const posts = await postService.getPostsInCategory(categoryId);
            return res.json(posts);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PostController();