import React from "react";
import Tilt from "react-tilt";

const Tile = ({ projects, type }) => (
  <React.Fragment>
    <h3>{type} Projects</h3>
    <div className={`container ${type}`}>
      {projects.map((proj, i) => (
        <div className="card" key={i}>
          <Tilt className="tilt" options={{ max: 25 }}>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <img src={proj.img} alt={proj.title} />
              <h2 className="project-title">{proj.title}</h2>
              <p>{proj.description}</p>
            </a>
          </Tilt>
          {type === "Front End" && (
            <div className="popup">
              <h4>
                Hosted: <span>{proj.flow.hosted}</span>
              </h4>
              <h4>
                Front End: <span>{proj.flow.frontend}</span>
              </h4>
              <h4>
                Styled: <span>{proj.flow.style}</span>
              </h4>
            </div>
          )}
          {type === "Back End" && (
            <div className="popup">
              <h4>
                Hosted: <span>{proj.flow.hosted}</span>
              </h4>
              <h4>
                Database: <span>{proj.flow.database}</span>
              </h4>
              <h4>
                Back End: <span>{proj.flow.backend}</span>
              </h4>
              {proj.flow.frontend === "CSS" && (
                <h4>
                  Styled: <span>{proj.flow.frontend}</span>
                </h4>
              )}
              {proj.flow.frontend !== "CSS" && (
                <h4>
                  Front End: <span>{proj.flow.frontend}</span>
                </h4>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default Tile;
