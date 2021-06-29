import {
    put,
    apply
} from 'redux-saga/effects';
import AuthService from '../../../service/authService'
import {
    actions
} from '../../actions';
export function* updateMessageServer({
    payload
}) {
    try {
        const {
            id,
            message
        } = payload
        yield apply(AuthService, AuthService.updateMessage, [id, message]);
        
    } catch (error) {
        console.log('error', error);
    }finally{
        yield put(actions.sortByImportance())
    }
}