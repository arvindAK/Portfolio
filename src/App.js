import React, { Component } from "react";
import About from "./components/About";
import Tile from "./components/Tile";
import Nav from "./components/Nav";
import { backend } from "./components/Projects";
import { frontend } from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <section id="portfolio">
          <h1>Portfolio</h1>
          <Tile projects={frontend} type={"Front End"} />
          <Tile projects={backend} type={"Back End"} />
          <span>
            The backend projects are deployed on Heroku, so please allow a few
            seconds for them to intialy load.
          </span>
        </section>
        <section id="about">
          <About />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
