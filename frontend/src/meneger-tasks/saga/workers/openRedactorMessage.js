import {
    put
} from 'redux-saga/effects'
import {
    actions
} from '../../actions';

export function* openRedactorMessage({payload}) {
    try {
        yield put(actions.openRedactor(payload))
    } catch (error) {
        console.log('error :', error);

    }
}