export const depLink = e => {
  console.log(e.target.textContent);
  switch (e.target.textContent) {
    case "react":
      window.open("https://reactjs.org/", "_blank");
      break;
    case "redux":
      window.open("https://redux.js.org/", "_blank");
      break;
    case "react router dom":
      window.open("https://www.npmjs.com/package/react-router-dom", "_blank");
      break;
    case "express":
      window.open("https://expressjs.com/", "_blank");
      break;
    case "postgresql":
      window.open("https://www.postgresql.org/", "_blank");
      break;
    case "firebase":
      window.open("https://firebase.google.com/", "_blank");
      break;
    case "bootstrap":
      window.open("https://getbootstrap.com/", "_blank");
      break;
    case "semantic ui react":
      window.open("https://react.semantic-ui.com/", "_blank");
      break;
    case "styled components":
      window.open("https://www.styled-components.com/", "_blank");
      break;
    case "react highcharts":
      window.open("https://www.npmjs.com/package/react-highcharts", "_blank");
      break;
    case "recharts":
      window.open("http://recharts.org/en-US/", "_blank");
      break;
    default:
    // code block
  }
};
