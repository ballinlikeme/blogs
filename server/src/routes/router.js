const Router = require('express');
const router = new Router();
const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');
const categoriesRouter = require('./routers/categoriesRouter')

router.use('/users', userRouter)
router.use('/posts', postRouter)
router.use('/categories', categoriesRouter);

module.exports = router;