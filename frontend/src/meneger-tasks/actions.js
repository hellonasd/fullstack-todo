
import { types } from './types';

export const actions = {

    createTask : (payload) => {
        return {
            type : types.CREATE_TASK,
            payload
        }
    },
    getAllTodo : (payload) => {
        return {
            type : types.GET_ALL_TODO,
            payload
        }
    },
    updateMessages : (payload) => {
        return {
            type : types.UPDATE_MESSAGE_ON_SERVER,
            payload
        }
    }, 
    deleteTask : (id) => {
        return {
            type : types.DELETE_TODO,
            payload : id
        }
    },
    

    editTask : (payload) => {
        return {
            type : types.EDIT_TASK,
            payload
        }
    },
    openRedactor : (id) => {
        return {
            type : types.OPEN_EDIT_TASK,
            payload : id
        }
    },
    closeRedactor : (id) => {
        return {
            type : types.CLOSE_EDIT_TASK,
            payload : id
        }
    },
    updateFavoriteCompleted : (payload) => {
        return {
            type : types.UPDATE_FAVORITE_AND_COMPLETED,
            payload,
        }
    },

    sortByImportance : () => {
        return {
            type : types.SORT_BY_IMPORT,
        }
    },
   
    
    //async
    asyncCreateTask : (payload) => {
        return {
            type : types.ASYNC_CREATE_TASK,
            payload
        }
    },
    asyncUpdateTask : (payload) => {
        return {
            type : types.ASYNC_UPDATE_TASK,
            payload
        }
    },
    
    asyncStartAnimation : () => {
        return {
            type : types.ANIMATION_START_ASYNC
        }
    },

    asyncGetAllTodo : (payload) => {
        return {
            type : types.ASYNC_GET_ALL_TODO,
            payload
        }
    },

    asyncDelteTodo: (id) => {
        return {
            type : types.ASYNC_DELETE_TODO,
            payload : id
        }
    },
    asyncOpenRedactor: (id) => {
        return {
            type : types.ASYNC_OPEN_REDACTOR,
            payload : id
        }
    },

    asyncUpdateFavorite: (payload) => {
        return {
            type : types.ASYNC_UPDATE_FAVORITE_AND_COMPLETED,
            payload
        }
    },
    
}