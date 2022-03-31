import { UPDATE_NODE } from "../actions/changeDemo";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NODE:
            return {
                ...state,
                globalParams: action.globalParams || {},
            };
        default:
            return {
                ...state,
                globalParams: action.globalParams || {},
            };
    }
}
