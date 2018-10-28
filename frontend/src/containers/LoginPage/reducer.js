import * as constant from './constants';
import objectService from '../../services/common/objectService';

export default (state = {
    error: ''
}, action) => {
    switch(action.type) {
        case constant.LOGIN_SET_ERROR:
            return objectService.insert(state, 'error', action.error);
        case constant.LOGIN_CLEAR_ERROR:
            return objectService.insert(state, 'error', {});        
        default:
            return state;
    }
};
