import React from "react";
import { Switch } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import Essentials from "./components/Essentials";
import Hero from "./components/Hero";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";
import { BrowserRouter as Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Men />
      <Women />
      <About />
      <Essentials />
      <Contact />
    </>
  );
}

export default App;
