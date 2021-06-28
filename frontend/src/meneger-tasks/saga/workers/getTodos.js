import { put, apply } from 'redux-saga/effects';
import AuthService from '../../../service/authService'
import { actions } from '../../actions';
export function* getAllTodo(email) {
    try {
        const response = yield apply(AuthService, AuthService.getAllTodo, [email]);
        yield put(actions.getAllTodo(response.data.todos));
    } catch (error) {
        console.log('error', error);
    }
}