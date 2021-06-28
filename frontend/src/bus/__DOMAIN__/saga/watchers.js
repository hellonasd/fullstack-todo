import { call, all, takeEvery } from 'redux-saga/effects';

import { types } from '..types';

import { worker } from './workers';

export function* wathWorker(){
    yield takeEvery(types.TYPE, worker);
}

export function* watchDomain(){
    yield all([call(wathWorker)]);
}