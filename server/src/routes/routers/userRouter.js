const Router = require('express');
const userRouter = new Router();
const userController = require('../../controllers/userController')

userRouter.post('/login', userController.login)
userRouter.post('/register', userController.register)
userRouter.get('/check', userController.check)

module.exports = userRouter;