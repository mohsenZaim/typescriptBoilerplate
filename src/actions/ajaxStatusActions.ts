import * as types from "../models/constants/actionTypes";
export interface AjaxStatusActions {
    beginAjaxCall: (dispatch) => any;
    ajaxCallEnded: (dispatch) => any;
    ajaxCallError: (dispatch) => any;
}

export function beginAjaxCall(dispatch) {
    return dispatch({ type: types.BEGIN_AJAX_CALL });
}

export function ajaxCallEnded(dispatch) {
    return dispatch({ type: types.END_AJAX_CALL });
}

export function ajaxCallError(dispach) {
    return dispach({ type: types.AJAX_CALL_ERROR });
}
