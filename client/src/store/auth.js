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

  logout() {
    this._auth = false;
    this._user = null;
    localStorage.removeItem("token");
  }

  authenticate(payload) {
    const {id, role, email} = payload;
    this._auth = true;
    this._user = {
      id, role, email
    };
    console.log(payload);
  }
}

export default new Auth();