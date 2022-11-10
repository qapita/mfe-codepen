import React from "react";
import { Route, Routes} from "react-router-dom";
import TestNav from "./Nav";

const App = () => {
  return <div>
        <h1>Liquidity</h1>       
        <Routes>
            <Route path="/exercises/*" element={ <TestNav link="surrenders" /> } />
            <Route path="/surrenders/*" element={ <TestNav link="exercises" /> } />
            <Route path="*" element="No match found" />
        </Routes>
  </div>;
};

export default App;
