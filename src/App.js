import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import { useState } from "react";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import Skill from "./components/Skill";
import About from "./components/About";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  const [mode, setmode] = useState("Dark");
  const toggleMode = () => {
    if (mode === "Light") {
      setmode("Dark");
      document.body.style.background = "#042743";
    } else {
      setmode("Light");
      document.body.style.background = "rgba(55, 175, 244, 1.0) ";
    }
  };
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Background
        mode={mode}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></Background>
      <Hero mode={mode}></Hero>
      <Project mode={mode}></Project>
      <Skill mode={mode}></Skill>
      <About mode={mode}></About>
      <Social mode={mode}></Social>
      <Footer mode={mode}></Footer>
    </div>
  );
}

export default App;
