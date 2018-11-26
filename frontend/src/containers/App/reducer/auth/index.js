import * as constant from './constants';
import objectService from '../../../../services/common/objectService';

export const initialState = {
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constant.ADD_USER:
            return objectService.insert(state, 'user', action.user);
        case constant.CLEAR_USER:
            return objectService.insert(state, 'user', {});
        default:
            return state;
    }
};
