const jwt = require('jsonwebtoken');

class TokenService {
    generateAccessToken(email, id) {
        const payload = {email, id}
        const token = jwt.sign(payload, process.env.SECRET_ACCESS_KEY, {
            expiresIn: "24h"
        })

        return token;
    }

    validateToken(token) {
        return jwt.verify(token, process.env.SECRET_ACCESS_KEY);
    }
}

module.exports = new TokenService();