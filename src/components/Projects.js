export const frontend = [
  {
    title: "CryptoDash",
    dependencies: ["react", "react highcharts", "styled components"],
    description: "Track the price of favorite CryptoCurrencies over time.",
    link: "https://arvindak.github.io/CryptoDash/",
    img: "img/react/cryptoDash.png",
    flow: {
      hosted: "Github Pages",
      frontend: "React",
      style: "Styled Components"
    }
  },
  {
    title: "Slack Messenger",
    dependencies: [
      "react",
      "firebase",
      "redux",
      "react router dom",
      "semantic UI react"
    ],
    description: "Slack style messenger app.",
    link: "https://react-slack-clone-3b5b0.firebaseapp.com/",
    img: "img/firebase/slack.png",
    flow: {
      hosted: "Firebase",
      frontend: "React & Redux",
      style: "Semantic UI React"
    }
  },
  {
    title: "Recipe App",
    dependencies: ["react", "bootstrap"],
    description:
      "Uses the Food2Fork API to look up recipes containing an ingredient.",
    link: "https://arvindak.github.io/recipe-app/",
    img: "img/react/recipe-app.png",
    flow: {
      hosted: "Github Pages",
      frontend: "React",
      style: "Bootstrap"
    }
  }
];

export const backend = [
  {
    title: "Amazon Prime Movie Filter",
    dependencies: ["react", "express", "postgresql"],
    description:
      "Filter Amazon Prime movies via IMDB, Amazon star rating, number of ratings, genre and year. Scrapped data using selenium.",
    link: "https://morning-crag-36301.herokuapp.com/#",
    img: "img/fullStack/movieFilter.png",
    flow: {
      hosted: "Heroku",
      database: "PostgreSQL",
      backend: "Express",
      frontend: "React"
    }
  },
  {
    title: "Scoop, Search Engine",
    dependencies: ["PHP", "MySQL"],
    description: "A PHP web scraper and search engine.",
    link: "https://quiet-mesa-13674.herokuapp.com/",
    img: "img/fullStack/scoop.png",
    flow: {
      hosted: "Heroku",
      database: "MySQL",
      backend: "PHP",
      frontend: "CSS"
    }
  },
  {
    title: "Waitrose Recipe Finder",
    dependencies: ["react", "express", "postgresql", "recharts"],
    description:
      "Sort recipes via nutritional content and filter by dietary requirements or food type.Scrapped data using selenium.",
    link: "https://fast-eyrie-78022.herokuapp.com/",
    img: "img/fullStack/recipeSort.png",
    flow: {
      hosted: "Heroku",
      database: "PostgreSQL",
      backend: "Express",
      frontend: "React"
    }
  }
];

export const fireBaseProjects = [];
