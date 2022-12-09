import {$authHost, $host} from "../http/http";
import jwt_decode from "jwt-decode";

class AuthService {
    async login(email, password) {
        const response = await $host.post('/users/login', { email, password });
        localStorage.setItem('token', response.data)
        return jwt_decode(response.data);
    }

    async register(email, password) {
        const response = await $host.post('/users/register', { email, password })
        return response.data;
    }

    async checkAuth() {
        const response = await $authHost.get('/user/check')
        return response;
    }
}

export default new AuthService();