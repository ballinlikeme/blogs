const categoriesService = require('../services/categoriesService');

class CategoriesController {

    async getAllCategories(req, res) {
        try {
            const categories = await categoriesService.getAllCategories();
            return res.json(categories);
        }catch (e) {
            console.log(e);
        }
    }

    async getOneCategory(req, res) {
        try {
            const {id, name} = req.body;
            const category = await categoriesService.getOneCategory(id, name);
            res.json(category);
        }catch (e) {
            console.log(e);
        }
    }

    async createCategory(req, res) {
        try {
            const {name} = req.body;
            const category = await categoriesService.createCategory(name);
            res.json(category);
        }catch (e) {
            console.log(e);
        }
    }

}

module.exports = new CategoriesController();