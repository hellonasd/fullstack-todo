import { types } from './types';

const initialState = {
    isAuth : false,
    user : {},
    loading : false,
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.IS_AUTH :
            return {
                ...state,
                isAuth : true,
                user : action.payload,
                loading : true
            };
        case types.IS_LOGOUT :
            return {
                ...state,
                isAuth : false,
                user : action.payload
            }
        default :
            return state;
    }
}