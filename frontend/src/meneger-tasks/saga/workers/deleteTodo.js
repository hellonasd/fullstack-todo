import { put, apply } from 'redux-saga/effects';
import AuthService from '../../../service/authService'
import { actions } from '../../actions';
export function* deleteTodo({payload}) {
    try {
        
        const response = yield apply(AuthService, AuthService.deleteTodo, [payload]);
        
        yield put(actions.deleteTask(response.data));
        
    } catch (error) {
        console.log('error', error);
    }finally{
        yield put(actions.sortByImportance())
    }
}