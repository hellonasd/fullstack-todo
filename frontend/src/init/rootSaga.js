import { call, all } from 'redux-saga/effects';
import { watchAuthWorker } from '../auth/saga/watchers';
import { watchPostsWorker } from '../meneger-tasks/saga/watchers'
export function* rootSaga(){
    yield all([
        call(watchAuthWorker),
        call(watchPostsWorker),
    ]);
}