import { put, apply } from 'redux-saga/effects';

import { actions } from '../../actions';
import  AuthService  from '../../../service/authService'

export function* logout(){
    try {
        const response = yield apply(AuthService, AuthService.logout);
        yield localStorage.removeItem('token');
        yield put(actions.isLogout({}))
    } catch (error) {
        console.log(error);
    }
}