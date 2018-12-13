import React from 'react';

const Card = (props) => (
  <React.Fragment>
    <h3>{props.type} Projects</h3>
    <div className="container">
    {props.projects.map((proj, index) => {
      return (
      <div className="card" key={proj.title}>
        <img src={proj.img} alt={proj.title} />
        <div className="card-text">
            <h2 className="project-title">{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} className="button">Visit Project</a>
        </div>
      </div>
      )})}
    </div>
  </React.Fragment>
);

export default Card
