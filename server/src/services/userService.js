const User = require('../database/models/users')
const tokenService = require('./tokenService');
const bcrypt = require('bcrypt');

class UserService {
    async login(email, password) {
        const user = await User.findOne({where: {email}});
        if (!user) throw new Error('invalid email');
        const comparePasswords = await bcrypt.compare(password, user.password)
        if (!comparePasswords) throw new Error('invalid password');
        const token = tokenService.generateAccessToken(email, user.id);
        return token;
    }

    async register(email, password, role) {
        const candidate = await User.findOne({where: {email}});
        if (candidate) throw new Error('user with this email already exists')
        const hashedPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashedPassword, role});
        const token = tokenService.generateAccessToken(email, user.id);
        const userData = {id: user.id, email: user.email, role: user.role, token, };
        return userData;
    }

    async check(token) {
        const decoded = tokenService.validateToken(token);
        if (!decoded) throw new Error('unauthorized');
        return decoded;
    }
}

module.exports = new UserService();