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

    setCurrentCategory(payload) {
        this.currentCategory = payload;
    }

}

export default new Categories();