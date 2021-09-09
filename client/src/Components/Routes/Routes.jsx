import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Starter from "../Starter/Starter";
import MapPage  from "../MapPage/MapPage";
import CrossHair from "../CrossHair/CrossHair";
import Settings from "../Settings/Settings";
import Transition from "../Transition/Transition";
import Results from "../Results/Results";
import Training from "../Training/Training";
import Targets from "../Targets/Targets";

/**
 * Routes returns the different components depending on the url path
 */
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Starter}>
                <Redirect
                    to={{
                        pathname: "/starter",
                    }}
                />
            </Route>

            <Route exact path="/starter" component={Starter} />
            <Route exact path="/map" component={MapPage} />
            <Route exact path="/crosshair" component={CrossHair} />
            <Route exact path="/targets" component={Targets} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/transition" component={Transition} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/training" component={Training} />
        </Switch>
    )
}
