import * as React from "react";
import { InitialStateModel } from "../reducers/initialState";

export const HomeContext = React.createContext<HomeContextModel>(null);

export interface HomeContextModel {
    state: InitialStateModel;
    dispatch: any;
}