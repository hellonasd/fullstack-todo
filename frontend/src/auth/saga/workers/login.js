import { put, apply } from 'redux-saga/effects';

import { actions } from '../../actions';
import  AuthService  from '../../../service/authService'

export function* login(action){
    try {
        const {email, password} = action.payload;
        const response = yield apply(AuthService, AuthService.login, [email, password]);
        yield localStorage.setItem('token', response.data.accessToken);
        yield put(actions.isAuth(response.data.user));
    } catch (error) {
        console.log(error)
    }
}