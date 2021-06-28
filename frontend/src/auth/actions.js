import { types } from './types';

export const actions = {
    isAuth : (payload) => {
        return {
            type : types.IS_AUTH,
            payload
        }
    },
    isLoading : () => {
        return {
            type : types.IS_LOADING
        }
    },

    isLogout : (payload) => {
        return {
            type : types.IS_LOGOUT,
            payload
        }
    },
    checkAuth : () => {
        return {
            type : types.ASYNC_CHECK_AUTH
        }
    },

    login : (payload) => {
        return {
            type : types.ASYNC_LOGIN,
            payload
        }
    },
    logout : () => {
        return {
            type : types.ASYNC_LOGOUT
        }
    },

    registration : (payload) => {
        return {
            type : types.ASYNC_REGISTRATION,
            payload
        }
    }
}