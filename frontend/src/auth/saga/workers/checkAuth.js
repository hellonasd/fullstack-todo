import {
    put,
    apply
} from 'redux-saga/effects';
import { API_URL } from '../../../http/index'
import axios from 'axios';
import { actions } from '../../actions'
export function* checkAuthWorker(action) {
    try {
        
        const response = yield axios.get(`${API_URL}/refresh`, {
            withCredentials: true
        });
        yield put(actions.isAuth(response.data.user));
        yield put(actions.isLoading());
    } catch (error) {
        console.log(error)
    }finally{
        yield put(actions.isLoading());
    }
}