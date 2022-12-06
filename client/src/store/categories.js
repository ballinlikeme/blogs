import {makeAutoObservable} from "mobx";

class Categories {

    categories = [];

    constructor() {
        makeAutoObservable(this);
    }

    async setCategories() {
        
    }

}

export default new Categories();