import { responseInterceptor } from "./responseInterceptor";
import * as actions from "../actions/ajaxStatusActions";

export function serviceHelper(api: Promise<any>, success?, fail?, history?, location?, dispatch?: any) {
    dispatch && actions.beginAjaxCall(dispatch);
    api.then((response) => {
        responseInterceptor(response, success, fail, history, location);
        dispatch && actions.ajaxCallEnded(dispatch);
    }).catch((error) => {
        responseInterceptor(error.response, success, fail, history);
        dispatch && actions.ajaxCallError(dispatch);
    });
}
