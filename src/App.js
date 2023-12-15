import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";
import NavBar from "./components/NavBar"
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";

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
    }, []);

    return (
      <>
      <NavBar />
        <div className="App">
            {init && <Particles options={particlesOptions}/>}
            <div id="home">
      <div className="text-white py-5 custom-padding hero">
        <div className="container text-center hero2">
          <img
            src="/portrait.jpg"
            alt="Anthony Seadler"
            className="rounded-circle img-fluid profile-pic"
            style={{ width: "200px", height: "200px" }}
          />
          <h1 className="mt-3">ANTHONY SEADLER</h1>

          <div className="coding-divider1">
          <i className="fa fa-code fa-2x"></i>
            
          </div>

          <h3 className="text-white job-position">Full Stack Web Developer</h3>
        </div>
       
      </div>
    </div>
      <ProjectsSection />
      <Skills />
        </div>
        </>
    );
}

export default App;
