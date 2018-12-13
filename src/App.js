import React, { Component } from 'react';
import Hero from './components/Hero';
import Card from './components/Card';
import About from './components/About';
import './App.css';

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
          <Card projects={reactProjects} type={"React"} />
          <Card projects={treehouseProjects} type={"Treehouse"} />
        </section>

      </div>
    );
  }
}

export default App;

const reactProjects = [
  {title: "Recipe App",
  description: "Uses the Food2Fork API to look up recipes containing an ingredient.",
  link: "https://arvindak.github.io/recipe-app/",
  img: "img/react/recipe-app.png"
  },

  {title: "Weather App",
  description: "Uses a Weather API to fetch look up recipes containing an ingredient.",
  link: "https://arvindak.github.io/weather-app/",
  img: "img/react/weather-app.png"
  }
]

const treehouseProjects = [
  {title: "Pagination and dynamic filtering",
  description: "Dynamicly search and filter a dataset of students.",
  link: "https://arvindak.github.io/THFS-Project2_Pagination/#",
  img: "img/treehouse/filter.png"
  },

  {title: "Form validation",
  description: "Using client side validation that provides real timeout feedback to the user.",
  link: "https://arvindak.github.io/THFS-Project3_InteractiveForm/#",
  img: "img/treehouse/form.png"
  },

  {title: "Tic-Tac-Toe",
  description: "Play against a local player or your computer.",
  link: "https://arvindak.github.io/THFS-Project4_Tic-Tac-Toe/#",
  img: "img/treehouse/game.png"
  },

  {title: "API Awesome Employee Fetching",
  description: "Fetch 12 users from an API, display them in cards, using modals to inspect each card.",
  link: "https://arvindak.github.io/THFS-Project5-API/#",
  img: "img/treehouse/api.png"
  }
];
