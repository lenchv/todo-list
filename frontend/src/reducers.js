import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import globalReducer from './containers/App/reducer/';

const createReducer = (injectedReducers) => {
    return combineReducers({
        route: routerReducer,
        global: globalReducer,
        ...injectedReducers
    });
};

export default createReducer;
