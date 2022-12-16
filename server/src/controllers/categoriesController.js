const categoriesService = require('../services/categoriesService');

class CategoriesController {

    async getAllCategories(req, res, next) {
        try {
            const categories = await categoriesService.getAllCategories();
            return res.json(categories);
        }catch (e) {
            next(e);
        }
    }

    async getOneCategory(req, res, next) {
        try {
            const {id, name} = req.body;
            const category = await categoriesService.getOneCategory(id, name);
            res.json(category);
        }catch (e) {
            next(e);
        }
    }

    async createCategory(req, res, next) {
        try {
            const {name} = req.body;
            const category = await categoriesService.createCategory(name);
            res.json(category);
        }catch (e) {
            next(e);
        }
    }

}

module.exports = new CategoriesController();