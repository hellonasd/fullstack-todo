import { put, apply } from 'redux-saga/effects';
import AuthService from '../../../service/authService'
import { actions } from '../../actions';
export function* createPost(action) {
    try {
        const {user, value} = action.payload;
        const response = yield apply(AuthService, AuthService.createPost, [user, value]);
        let item = null;
        for(let i = 0; i < response.data.todos.length; i++){
            
            if(response.data.todos[i].__v === 0){
                item = response.data.todos[i];
            }
        }
        yield put(actions.createTask(item));
    } catch (error) {
        console.log('error', error);
    }
}