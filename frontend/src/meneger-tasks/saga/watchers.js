import { call, all, takeEvery } from 'redux-saga/effects';

import { types } from '../types';

import { createPost, getAllTodo,deleteTodo,updateTask, updateMessageServer, openRedactorMessage} from './workers';

function* createPostWorker(){
    yield takeEvery(types.ASYNC_CREATE_TASK, createPost);
}

function* getAllTodoWorker(){
    yield takeEvery(types.ASYNC_GET_ALL_TODO, getAllTodo);
}
function* deleteTodoWorker(){
    yield takeEvery(types.ASYNC_DELETE_TODO, deleteTodo);
}
function* updateTaskWorker(){
    yield takeEvery(types.ASYNC_UPDATE_TASK, updateTask);
}
function* updateMessageWorker(){
    yield takeEvery(types.UPDATE_MESSAGE_ON_SERVER, updateMessageServer);
}
function* openRedactorWorker(){
    yield takeEvery(types.ASYNC_OPEN_REDACTOR, openRedactorMessage);
}

export function* watchPostsWorker(){
    yield all([
        call(createPostWorker),
        call(getAllTodoWorker),
        call(deleteTodoWorker),
        call(updateTaskWorker),
        call(updateMessageWorker),
        call(openRedactorWorker),
    ]);
}