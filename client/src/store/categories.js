import {makeAutoObservable} from "mobx";

class Categories {

    categories = [];
    currentCategory = {
        name: "",
        id: 0,
    };

    constructor() {
        makeAutoObservable(this);
    }

    setCategories(payload) {
        this.categories = payload;
    }

    setCurrentCategory(name) {
        this.currentCategory = name;
    }

}

export default new Categories();