import logo from './logo.svg';
import './App.css';


import { Routes, Route, Navigate } from "react-router-dom";

import Starter from "../src/Components/Starter/Starter";
import MapPage from "../src/Components/MapPage/MapPage";
import CrossHair from "../src/Components/CrossHair/CrossHair";
import Settings from "../src/Components/Settings/Settings";
import Transition from "../src/Components/Transition/Transition";
import Results from "../src/Components/Results/Results";
import Training from "../src/Components/Training/Training";
import Targets from "../src/Components/Targets/Targets";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/starter" />} /> 
        <Route path="/starter" element={<Starter />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/crosshair" element={<CrossHair />} />
        <Route path="/targets" element={<Targets />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/results" element={<Results />} />
        <Route path="/training" element={<Training />} />
    </Routes>
  )
}

export default App;
