import React from "react";
import { Route, Routes } from "react-router-dom";
import LiquidityRootPage from "./pages";
import ExercisesPage from "./pages/exercises";
import SurrendersPage from "./pages/surrenders";

const App = () => {
  return (
    <div>
      <h1>Liquidity</h1>
      <Routes>
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/surrenders" element={<SurrendersPage />} />
        <Route path="/" element={<LiquidityRootPage />} />
      </Routes>
    </div>
  );
};

export default App;
