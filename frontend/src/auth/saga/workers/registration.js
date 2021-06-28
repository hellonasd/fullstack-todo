import {
    put,
    apply
} from 'redux-saga/effects'
import { actions } from '../../actions'
import AuthService from '../../../service/authService'
export function* registration(action) {
    try {
        const {email,password} = action.payload;
        const response = yield apply(AuthService, AuthService.registration, [email, password]);
        yield localStorage.setItem('token', response.data.accessToken);
        if(response.status !== 200){
            throw new Error('oops ')
        }
        yield put(actions.isAuth(response.data.user));
    } catch (error) {
        console.log(error)
    }
}