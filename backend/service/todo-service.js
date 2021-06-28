const todoModel = require('../models/users/todo');
class TodoService {
    async createTask(message) {
        const todo = todoModel.create({
            data: {
                message,
                completed: false,
                favorite: false,
                created: new Date()
            }
        });
        return todo
    }
}

module.exports = new TodoService();