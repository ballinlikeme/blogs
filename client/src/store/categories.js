import { makeAutoObservable } from "mobx";

class Categories {
  categories = [];
  currentCategory = {
    name: "",
    id: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  getCategory(name) {
    const category = this.categories.filter(category => category.name === name);
    return category;
  }

  setCategories(payload) {
    this.categories = payload;
  }

  setCurrentCategory(payload) {
    this.currentCategory = payload;
  }
}

export default new Categories();