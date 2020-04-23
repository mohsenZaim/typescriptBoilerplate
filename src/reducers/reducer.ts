import * as ActionTypes from "../models/constants/actionTypes";
import { InitialStateModel } from "./initialState";

export const appReducer = (state: InitialStateModel, action: any) => {
    // console.log("ACTION", action);
    switch (action.type) {
        case ActionTypes.BEGIN_AJAX_CALL: {
            return { ...state, httpCallsInProgress: ++state.httpCallsInProgress };
        }
        case ActionTypes.END_AJAX_CALL:
        case ActionTypes.AJAX_CALL_ERROR: {
            return { ...state, httpCallsInProgress: --state.httpCallsInProgress };
        }
        default:
            console.warn("appReducer: received unkown action ", action);
            return state;
    }
};
