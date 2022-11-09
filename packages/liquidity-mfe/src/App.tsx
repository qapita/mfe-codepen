import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return <div>
        <h1>Liquidity</h1>       
        <Routes>
            <Route path="/exercises" element={ <h1> Exercise Events </h1> } />
            <Route path="/surrenders" element={ <h1> Surrender Events </h1> } />
            <Route path="/" element="No match found" />
        </Routes>
  </div>;
};

export default App;
