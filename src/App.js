import React, { Component } from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import About from "./components/About";
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
          <Card projects={fullstackProjects} type={"Full Stack"} />
          <Card projects={reactProjects} type={"React"} />
          <Card projects={treehouseProjects} type={"Treehouse"} />
        </section>
      </div>
    );
  }
}

export default App;

const reactProjects = [
  {
    title: "Recipe App",
    description:
      "Uses the Food2Fork API to look up recipes containing an ingredient.",
    link: "https://arvindak.github.io/recipe-app/",
    img: "img/react/recipe-app.png"
  },

  {
    title: "Weather App",
    description:
      "Uses a Weather API to fetch look up recipes containing an ingredient.",
    link: "https://arvindak.github.io/weather-app/",
    img: "img/react/weather-app.png"
  },

  {
    title: "Todo App",
    description: "Track tasks and save them to the local browsers cache",
    link: "https://arvindak.github.io/Todo-App/",
    img: "img/react/todo-app.png"
  }
];

const treehouseProjects = [
  {
    title: "Pagination and dynamic filtering",
    description: "Dynamicly search and filter a dataset of students.",
    link: "https://arvindak.github.io/THFS-Project2_Pagination/#",
    img: "img/treehouse/filter.png"
  },

  {
    title: "Form validation",
    description:
      "Using client side validation that provides real timeout feedback to the user.",
    link: "https://arvindak.github.io/THFS-Project3_InteractiveForm/#",
    img: "img/treehouse/form.png"
  },

  {
    title: "API Awesome Employee Fetching",
    description:
      "Fetch 12 users from an API, display them in cards, using modals to inspect each card.",
    link: "https://arvindak.github.io/THFS-Project5-API/#",
    img: "img/treehouse/api.png"
  }
];

const fullstackProjects = [
  {
    title: "Amazon Prime Movie Filter",
    description:
      "Filter Amazon Prime movies via IMDB, Amazon star rating, number of ratings, genre and year",
    link: "https://morning-crag-36301.herokuapp.com/#",
    img: "img/fullStack/movieFilter.png"
  },
  {
    title: "Waitrose Recipe Finder",
    description:
      "Sort recipes via nutritional content and filter by dietary requirements or food type",
    link: "https://fast-eyrie-78022.herokuapp.com/",
    img: "img/fullStack/recipeSort.png"
  }
];
