import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Starter from "../Starter/Starter";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Starter />
                <Redirect
                    to={{
                        pathname: "/starter",
                    }}
                />
            </Route>

            <Route exact path="/starter">
                <Starter />
            </Route>
        </Switch>
    )
}
