import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState, history) => {
    const middlewares = [ sagaMiddleware, routerMiddleware(history) ];
    const enhacers = [ applyMiddleware(...middlewares) ];

    const store = createStore(
        createReducer(),
        initialState,
        compose(...enhacers)
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedSagas = {};
    store.injectedReducers = {};

    return store;
};

export default configureStore;