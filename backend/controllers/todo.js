const TodoModel = require('../models/users/todo');
const TokenModel = require('../models/users/token');
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
        const token = await TokenModel.find({refreshToken});
        const todo = await userModel.findOne(token._id).select('-__v -password')
        .populate({path : 'todos',options: { sort: { 'data.created': -1 } }, select : '-__v '})
        return res.json(todo);
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
}

module.exports = new TodoController();