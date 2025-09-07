import React from "react";
import Search from "./components/Search/Search";
import MainHome from "./components/MainHome";
import { Route, Routes } from "react-router-dom";
import ProductProvider from "./context/products/ProductProvider";

const App = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/s" element={<Search />} />
      </Routes>
    </ProductProvider>
  );
};

export default App;
