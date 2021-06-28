import {
    put,
    apply
} from 'redux-saga/effects';
import AuthService from '../../../service/authService'
import {
    actions
} from '../../actions';
export function* updateTask({
    payload
}) {
    try {
        const {
            id,
            message
        } = payload
        yield put(actions.editTask({
            data: {
                message: message,
                completed: false,
                favorite: false,
                date: new Date(),
                id
            }
        }))
        
        yield apply(AuthService, AuthService.updateMessage, [id, message]);

    } catch (error) {
        console.log('error', error);
    }
}