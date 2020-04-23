import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoutes } from "../models/constants/routePaths";
import { Loader } from "./common/elements/Loader";

const Home = React.lazy(() => import("./home/Home"));
const NotFound = React.lazy(() => import("./common/NotFound"));

const App: React.FunctionComponent = (): React.ReactElement<void> => {
    return (
        <>
            <React.Suspense fallback={<Loader toggle={true} />}>
                <Switch>
                    <Route path={AppRoutes.Base} exact={true} component={Home} />
                    <Route path={AppRoutes.Rest} component={NotFound} />
                </Switch>
            </React.Suspense>
        </>
    );
};

export default App;
