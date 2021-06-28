const jwt = require('jsonwebtoken');
const TokenModel = require('../models/users/token');
class TokenService {
    async generateToken (payload){
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {expiresIn : '15m'});
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, {expiresIn : '30d'});
        return {
            accessToken,
            refreshToken
        }
    }
    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
            return userData;
        } catch (error) {
            return null;
        }
    }
    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, process.env.REFRESH_TOKEN_KEY);
            return userData;
        } catch (error) {
            return null;
        }
    }
    async findToken(refreshToken){
        const tokenData = await TokenModel.findOne({refreshToken});
        return tokenData;
    }

    async saveToken(userId, refreshToken){
        const tokenData = await TokenModel.findOne({user : userId});
        if(tokenData){
            tokenData.refreshToken = refreshToken;
            await tokenData.save();
        }
        const token = await TokenModel.create({user : userId, refreshToken});
        return token;
    }

    async removeToken(refreshToken){
        const token = await TokenModel.deleteOne({refreshToken});
        return token;
    }
}

module.exports = new TokenService();