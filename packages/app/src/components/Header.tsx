import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function navigateToRoot() {
    navigate("/");
  }

  return (
    <header>
      <span onClick={navigateToRoot}>App</span>
    </header>
  );
};

export default Header;
