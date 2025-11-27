import React from "react";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="w-full h lg:h-screen flex flex-col lg:flex-row">
      <Navbar />
      {/* <ProductsSection /> */}
      <Routing />
    </div>
  );
};

export default App;
