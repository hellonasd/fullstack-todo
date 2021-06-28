import { combineReducers } from 'redux'
import {reducer as auth } from '../auth/reducer';
import {reducer as posts } from '../meneger-tasks/reducer'
export const rootReducer = combineReducers({
    auth,
    posts
})