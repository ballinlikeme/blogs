const Categories = require('../database/models/category');
const ApiError = require('../exceptions/apiError')

class CategoriesService {

    async getAllCategories() {
        const categories = await Categories.findAll();
        return categories;
    }

    async getOneCategory(id, name) {
        const category = id ? await Categories.findOne({where: {id}}) : await Categories.findOne({where: {name}});
        if (!category) throw ApiError.BadRequest('no matches found');
        return category;
    }

    async createCategory(name) {
        const candidate = await Categories.findOne({where: {name}});
        if (candidate) throw ApiError.BadRequest('category already exists');
        const category = await Categories.create({name});
        return category
    }

}

module.exports = new CategoriesService();