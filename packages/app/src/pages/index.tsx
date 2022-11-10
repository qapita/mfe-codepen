import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <Link to={"/liquidity"}>Liquidity</Link>
      <br />
      <Link to={"/approvals"}>Approvals</Link>
    </div>
  );
};

export default HomePage;
