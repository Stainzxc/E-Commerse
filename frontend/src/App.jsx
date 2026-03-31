import React from "react";
import { Switch } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import Essentials from "./components/Essentials";
import Hero from "./components/Hero";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";
import ProductDetail from "./components/ProductDetail";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Essentials />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
