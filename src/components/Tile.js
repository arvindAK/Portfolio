import React from "react";
import Tilt from "react-tilt";
import { depLink } from "./depLink";

const Tile = ({ projects, type }) => (
  <React.Fragment>
    <h3>{type} Projects</h3>
    <div className="container">
      {projects.map((proj, i) => (
        <Tilt className="tilt" options={{ max: 25 }} key={i}>
          <a href={proj.link}>
            <img src={proj.img} alt={proj.title} />
            <h2 className="project-title">{proj.title}</h2>
            <p>{proj.description}</p>
          </a>

          <div className="dep">
            <hr />
            <h4>Dependencies</h4>
            {proj.dependencies.map((dep, i) => (
              <span key={i} name={dep} onClick={depLink}>
                {dep}
              </span>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </React.Fragment>
);

export default Tile;
