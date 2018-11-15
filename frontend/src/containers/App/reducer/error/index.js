import * as constant from "./constants";
import objectService from "../../../../services/common/objectService";

export const initialState = {
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constant.SET_ERROR:
            return objectService.insert(state, 'message', action.message);
        case constant.UNSET_ERROR:
            return objectService.remove(state, 'message');
        default:
            return state;
    }
};
