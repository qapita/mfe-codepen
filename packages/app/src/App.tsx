import React, { Suspense, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./Main";

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
};

export default App;
