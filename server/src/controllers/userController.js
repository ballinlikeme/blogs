const userService = require('../services/userService')

class UserController {
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const token = await userService.login(email, password)
            return res.json({token: token});
        }catch (e) {
            next(e);
        }
    }

    async register(req, res, next) {
        try {
            const {email, password, role} = req.body;
            const user = await userService.register(email, password, role);
            return res.json(user);
        }catch (e) {
            next(e)
        }
    }

    async check(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = await userService.check(token);
            return res.json(decoded);
        }catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController();