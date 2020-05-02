import React from "react";
import GITHUB from "../assets/svg/github";

const Projects = props => {
  const content = props.projects.map(project => (
    <div key={project.id} className="col-md-6 col-sm-12 work-tile">
      {/* <h3 className="h2">{project.title}</h3> */}
      <br></br>
      <a href={`${project.anchor}`} id={`project${project.id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.image}.jpg`}
          className="img-fluid proj-img"
          alt={project.title}
        ></img>
      </a>
      <br></br>
      <a
        href={`${project.gitLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <GITHUB></GITHUB>
        Check code on Github
      </a>
      <p className="work-description">{project.description}</p>
    </div>
  ));
  return <div className="row">{content}</div>;
};

export default Projects;
