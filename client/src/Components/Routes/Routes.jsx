import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Starter from "../Starter/Starter";
import MapPage  from "../MapPage/MapPage";
import CrossHair from "../CrossHair/CrossHair";
import Settings from "../Settings/Settings";

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
            <Route exact path="/crosshair">
                <CrossHair />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
        </Switch>
    )
}
