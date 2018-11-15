import auth, { initialState as authState } from "./auth/";
import error, { initialState as errorState } from "./error/";
import applyReducers from "../../../helpers/commons/applyReducers";

const initialState = {
    auth: authState,
    error: errorState
};

export default (state = initialState, action) => {
    return applyReducers({
        auth, error
    }, state, action);
};
