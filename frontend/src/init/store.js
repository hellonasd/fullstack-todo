import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


const logger = createLogger({
    duration : true,
    collapsed : true,
    colors : {
        title : () => '#ff8c69',
        prevState : () => '#9E9E9E',
        action : () => '#03A9F4',
        nextState : () => '#4CAF50',
        error : () => '#F20404'
    }
})

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = devtools ? devtools : compose;
const middleware = [sagaMiddleware, logger];

const enhancedStore = composeEnhancer(applyMiddleware(...middleware));
export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);