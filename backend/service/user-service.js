const bcrypt = require('bcryptjs');
const userModel = require('../models/users/user');
const UserDto = require('../dtos/index');
const tokenService = require('./token-service');
const TokenModel = require('../models/users/token');
class UserService {
    async registration(email, password) {
        try {
            const candidate = await userModel.findOne({
                email
            });
            if (candidate) {
                throw new Error('пользователь уже сушествует');
            }
            const hashPassword = await bcrypt.hash(password, 3);
            const userData = await userModel.create({
                email,
                password: hashPassword,
                todos: []
            })
            const userDto = new UserDto(userData);
            const tokens = await tokenService.generateToken({
                ...userDto
            });
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {
                ...tokens,
                user: userDto,
            };
        } catch (error) {
            console.log(error);
        }
    }
    async login(email, password) {
        try {
            const user = await userModel.findOne({
                email
            })
            if (!user) {
                throw new Error('пользователя с таким email не существует');
            }

            const equalPassword = await bcrypt.compare(password, user.password);
            if (!equalPassword) {
                throw new Error('неверный пароль');
            }

            const userDto = new UserDto(user);
            const tokens = await tokenService.generateToken({
                ...userDto
            });
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {
                user: userDto,
                ...tokens
            };
        } catch (error) {
            console.log(error);
        }
    }
    async logout(refreshToken) {
        try {
            const token = await tokenService.removeToken(refreshToken);
            return token
        } catch (error) {
            console.log(error);
        }
    }

    async refresh(refreshToken) {
        try {
            if (!refreshToken) {
                throw new Error('token not found 1')
            }
            const userData = await tokenService.validateRefreshToken(refreshToken);

            const tokenFromDb = await tokenService.findToken(refreshToken);

            if (!userData || !tokenFromDb) {
                throw new Error('token not found')
            }
            const user = await userModel.findById(userData.id)

            const userDto = new UserDto(user);

            const tokens = await tokenService.generateToken({
                ...userDto
            });
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {
                ...tokens,
                user: userDto
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserService();