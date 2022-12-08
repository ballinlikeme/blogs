const Router = require('express');
const postRouter = new Router();
const postController = require('../../controllers/postController')

postRouter.get('/getOne', postController.getOne)
postRouter.get('/getAll', postController.getAll)
postRouter.post('/getPostsInCategory', postController.getPostsInCategory)
postRouter.post('/create', postController.create)

module.exports = postRouter;