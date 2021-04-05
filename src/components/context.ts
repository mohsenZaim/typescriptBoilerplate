import * as React from 'react';
import { initialStateCombined, MainState } from '../reducers/reducers';

export const AppContext = React.createContext<AppContextModel>(initialStateCombined);

export interface AppContextModel {
    state: MainState;
    dispatch: React.Dispatch<any>;
}
