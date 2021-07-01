import {
    actions
} from './actions';
import {
    types
} from './types';

const initialState = {
    todo: [],
    isOpen : false,
    re : true,
    
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_TASK:
            return {
                ...state,
                todo: [action.payload, ...state.todo]
            };
        case types.GET_ALL_TODO:
            return {
                ...state,
                todo: [...action.payload]
            };
        case types.DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(el => {
                    if (el._id !== action.payload) {
                        return el;
                    }
                })
            };
        case types.EDIT_TASK:
            return {
                ...state,
                todo: state.todo.map(el => {
                    if (el._id === action.payload.data.id) {
                        return {
                            ...el,
                            message: action.payload.data.message,
                        }
                    } else {
                        return el
                    }
                })
            }
        case types.OPEN_EDIT_TASK :
            return {
                ...state,
                todo : state.todo.map(el => {
                    if(el._id === action.payload){
                        return {
                            ...el,
                            isOpen : true
                        }
                    }else {
                        return {
                            ...el,
                            isOpen : false
                        }
                    }
                })
            }
        case types.CLOSE_EDIT_TASK :
            return {
                ...state,
                todo : state.todo.map(el => {
                    if(el._id === action.payload){
                        return {
                            ...el,
                            isOpen : false
                        }
                    }else {
                        return {
                            ...el,
                            isOpen : false
                        }
                    }
                })
            }
        case types.UPDATE_FAVORITE_AND_COMPLETED :
            return {
                ...state,
                todo : state.todo.map(el => {
                    if(el._id === action.payload._id){
                        return {
                            ...el,
                            favorite : action.payload.data.favorite,
                            completed : action.payload.data.completed,
                        }
                    }else {
                        return {
                            ...el
                        }
                    }
                })
            }
        case types.SORT_BY_IMPORT : 
        return {
            ...state,
            todo : state.todo.sort((a, b) => {
                if(a.data.favorite === b.data.favorite){
                    if(a.data.completed === b.data.completed){
                        return b.data.created.toString().localeCompare(a.data.created.toString())
                    }
                    return a.data.completed > b.data.completed ? 1 : -1
                }
                return b.data.favorite > a.data.favorite ? 1 : -1;
            })
        }
    case types.ANIMATION_START_ASYNC :
        return {
            ...state,
            re : !state.re
        }
        default:
            return state;
    }
}