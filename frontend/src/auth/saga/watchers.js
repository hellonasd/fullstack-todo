import { call, all, takeEvery } from 'redux-saga/effects';

import {types } from '../types';

import { registration,checkAuthWorker, login, logout } from './workers';

function* registrationWorker(){
    yield takeEvery(types.ASYNC_REGISTRATION, registration);
}
function* checkAuthorizationhWorker(){
    yield takeEvery(types.ASYNC_CHECK_AUTH, checkAuthWorker);
}

function* loginWorker(){
    yield takeEvery(types.ASYNC_LOGIN, login);
}
function* logoutWorker(){
    yield takeEvery(types.ASYNC_LOGOUT, logout);
}

export function* watchAuthWorker(){
    yield all([
        call(registrationWorker),
        call(checkAuthorizationhWorker),
        call(loginWorker),
        call(logoutWorker),
    ]);
}