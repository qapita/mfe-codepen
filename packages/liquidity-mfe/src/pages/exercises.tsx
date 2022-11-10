import React from "react";
import { Link } from "react-router-dom";

const ExercisesPage = () => {
  return (
    <div>
      <h2>ExercisesPage</h2>
      <Link to={"/liquidity/surrenders"}>Surrender</Link>
    </div>
  );
};

export default ExercisesPage;
