import {$host} from "../http/http";

class CategoryService {

     async getAllCategories() {
          const categories = await $host.get('/categories/getAll')
               .then(result => result.data)
          return categories
     }

     async getOneCategory(name) {
          const category = await $host.post('/categories/getOne', {name})
               .then(result => result.data)
          return category
     }

     async createCategory(name) {
          const category = await $host.post('/categories/create', {name})
               .then(result => result.data)
          return category
     }
}

export default new CategoryService();