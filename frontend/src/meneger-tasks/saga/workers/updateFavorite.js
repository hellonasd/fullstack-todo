import { put, apply } from 'redux-saga/effects';
import AuthService from '../../../service/authService'
import { actions } from '../../actions';
export function* updateFavorite({payload}) {
    try {
        const {id, favorite} = payload
        const response = yield apply(AuthService, AuthService.updateFavoriteAndCompleted,[id, favorite])
        yield put(actions.updateFavoriteCompleted(response.data))
    } catch (error) {
        console.log('error', error);
    }finally{
        yield put(actions.sortByImportance())
    }
}