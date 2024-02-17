import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import NavBar from "./components/NavBar";
// import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Locations from "./components/Locations";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ProjectGrid from "./components/ProjectGrid";
import AsteroidGame from "./components/AsteroidGame";
import Footer from "./components/Footer";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <>
    <div className="part-back">
            {init && <Particles options={particlesOptions} />}
          </div>
      <Router>
        <NavBar />
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectGrid />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/asteroids" element={<AsteroidGame />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
