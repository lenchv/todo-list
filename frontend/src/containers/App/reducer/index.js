import auth from "./auth/";
import applyReducers from "../../../helpers/commons/applyReducers";

const initialState = {
    auth: {}
};

export default (state = initialState, action) => {
    return applyReducers({
        auth
    }, state, action);
};
