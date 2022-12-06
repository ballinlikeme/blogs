const Router = require('express');
const categoriesRouter = new Router();
const categoriesController = require('../../controllers/categoriesController');

categoriesRouter.get('/getAll', categoriesController.getAllCategories)
categoriesRouter.get('/getOne', categoriesController.getOneCategory)
categoriesRouter.post('/create', categoriesController.createCategory);

module.exports = categoriesRouter;