import { HOME_CHANGE_VALUE } from './constants';

const initialState = {
    value: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case HOME_CHANGE_VALUE:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
};
