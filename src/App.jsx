import React from "react";
import Root from "./root";

import "./App.css";
import Grid from "./Components/Grid";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="w-full">
      <Root />
      <Footer />
    </div>
  );
};

export default App;
