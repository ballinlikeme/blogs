import { $authHost, $host } from "./http";
import jwt_decode from "jwt-decode";

async function registration(email, password) {
    const response = await $host.post('/users/register', {
        email, password
    })
    return response.data;
}

async function login(email, password) {
    const response = await $host('/users/login', {
        email, password
    })
    localStorage.setItem('token', response.data)
    return jwt_decode(response.data);
}

async function checkAuth() {
    const response = await $authHost.get('/user/check')
    return response;
}

export {registration, login, checkAuth};