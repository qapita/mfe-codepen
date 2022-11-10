import React from "react";
import { Link } from "react-router-dom";

const LiquidityRootPage = () => {
  return (
    <div>
      <h2>LiquidityRootPage</h2>
      <Link to={"/liquidity/surrenders"}>Surrender</Link>
      <br />
      <Link to={"/liquidity/exercises"}>Exercise</Link>
    </div>
  );
};

export default LiquidityRootPage;
