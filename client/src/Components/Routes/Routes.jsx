import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Starter from "../Starter/Starter";
import MapPage  from "../MapPage/MapPage";

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
            <Route exact path="/map">
                <MapPage />
            </Route>
        </Switch>
    )
}
