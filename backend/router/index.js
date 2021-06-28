const express = require('express');
const userController = require('../controllers/user');
const TodoController = require('../controllers/todo');
const router = express.Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh',userController.refresh);

router.post('/createtask', TodoController.createTodo);
router.get('/getalltodo', TodoController.getAllTodo);
router.delete('/delete', TodoController.deleteTodo);
router.put('/updateTask', TodoController.updateMessage);

module.exports = router;