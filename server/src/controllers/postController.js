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
            const {title, text, author, UserId} = req.body
            const post = await postService.create(title, text, author, UserId);
            return res.json(post)
        }catch (e) {
            console.log(e);
        }
    }
}

module.exports = new PostController();