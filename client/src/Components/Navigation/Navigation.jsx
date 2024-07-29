import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

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
export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/starter" />} /> 
                <Route exact path="/starter" element={Starter} />
                <Route exact path="/map" element={MapPage} />
                <Route exact path="/crosshair" element={CrossHair} />
                <Route exact path="/targets" element={Targets} />
                <Route exact path="/settings" element={Settings} />
                <Route exact path="/transition" element={Transition} />
                <Route exact path="/results" element={Results} />
                <Route exact path="/training" element={Training} />
            </Routes>
        </Router>
    )
}
