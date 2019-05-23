import React, { Component } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Tile from "./components/Tile";
import { backend } from "./components/Projects";
import { frontend } from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <Tile projects={frontend} type={"Front End"} />
          <Tile projects={backend} type={"Back End"} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
