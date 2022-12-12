const tokenService = require("../services/tokenService");
const ApiError = require("../exceptions/apiError");

class TokenController {
  generateAccessToken(email, id, role) {
    try {
      const token = tokenService.generateAccessToken(email, id, role);
      return token;
    } catch (e) {
      console.log(e);
    }
  }

  validateToken(token) {
    try {
      return tokenService.validateToken(token);
    } catch (e) {
      throw ApiError.UnauthorizedError();
    }
  }
}

module.exports = new TokenController();
