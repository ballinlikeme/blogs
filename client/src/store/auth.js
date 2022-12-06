import { makeAutoObservable } from "mobx";

class Auth {

    _auth = false;
    _user = null;

    constructor() {
        makeAutoObservable(this);
    }

    getAuth() {
        return this._auth;
    }

    getUser() {
        return this._user;
    }


    authenticate(payload) {
        this._auth = true;
        this._user = payload;
    }
}

export default new Auth();