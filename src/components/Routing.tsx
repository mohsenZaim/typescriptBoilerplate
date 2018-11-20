import * as React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRouting({ component: C, props: cProps, auth, ...rest }) {
    return <Route
        {...rest}
        render={(props) =>
            (auth)
                ? <C {...props} {...cProps} />
                : <Redirect to={{ pathname: { ...rest }.redirectPath || "/login", state: { from: props.location } }} />}
    />;
}

export function Routing({ component: C, props: cProps, ...rest }) {
    return <Route
        {...rest}
        render={(props) =>
            <C {...props} {...cProps} />}
    />;
}
