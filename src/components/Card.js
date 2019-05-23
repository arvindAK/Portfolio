import React from "react";

const Card = props => (
  <React.Fragment>
    <h3>{props.type} Projects</h3>
    <div className="container">
      {props.projects.map((proj, index) => {
        return (
          <div className="card" key={proj.title}>
            <h2 className="project-title">{proj.title}</h2>
            <div className="box">
              <div className="hover-point" />
              <div className="hover-point" />
              <div className="hover-point" />
              <div className="hover-point" />
              <div className="hover-point" />
              <div className="hover-point" />
              <div className="hover-point" />
              <div className="hover-point" />
              <img className="box-contents" src={proj.img} alt={proj.title} />
            </div>
            <div className="card-text">
              <p>{proj.description}</p>
              <a href={proj.link} className="button">
                Visit Project
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </React.Fragment>
);

export default Card;
