import {
    actions
} from './actions';
import {
    types
} from './types';

const initialState = {
    todo: [],
    isOpen : false
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
            default:
                return state;
    }
}