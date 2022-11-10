import React from "react";
import { Link } from "react-router-dom";

const SurrendersPage = () => {
  return (
    <div>
      <h2>SurrendersPage</h2>
      <Link to={"/liquidity/exercises"}>Exercise</Link>
    </div>
  );
};

export default SurrendersPage;
