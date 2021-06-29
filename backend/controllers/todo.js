const TodoModel = require('../models/users/todo');
const TokenModel = require('../models/users/token');
const tokenService = require('../service/token-service');
const userModel = require('../models/users/user');
const todoService = require('../service/todo-service');

class TodoController {
    async createTodo (req, res, next){
        try {
            const {email, message} = req.body;
            const todo = await userModel.findOne({email})
            .populate({path : 'todos', select : ' -__v'})
            const result = await todoService.createTask(message);
            todo.todos.push(result);
            todo.save();
            return res.json(todo);
        } catch (error) {
            console.log(error);
        }
    }

    async getAllTodo (req, res, next){
        const { refreshToken } = req.cookies;
        const {email} = tokenService.validateRefreshToken(refreshToken);
        const user = await userModel.findOne({email}).select('-__v -password').populate({path : 'todos',options: { sort: { 'data.created': -1 } }, select : '-__v '});
        return res.json(user);
    }

    async deleteTodo(req, res, next) {
        const {data} = req.query;
        const todo = await TodoModel.findOneAndDelete({_id : data});
        res.json(todo._id);
    }

    async updateMessage (req, res, next) {
        const {id, message} = req.body;
        const data = await TodoModel.findOneAndUpdate({_id: id}, {$set : {'data.message' : message}},{new : true})
        res.status(200)
    }

    async updateCompletedAndFavorite(req, res, next){
        const {id, favorite, completed} = req.body;
        const data = await TodoModel.findOneAndUpdate({_id : id}, {$set : {'data.favorite' : favorite, 'data.completed':completed}}, {new : true});
        return res.status(201).json(data);
    }
}

module.exports = new TodoController();