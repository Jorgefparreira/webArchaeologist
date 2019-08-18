import React, { Component } from "react";
import Projects from "../components/project_data";
import projects from "../components/project_list";

class ProjectsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    setTimeout(
      function() {
        const height = this.divElement.clientHeight;
        this.props.projectsHeight(height);
      }.bind(this),
      2000
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const height = this.divElement.clientHeight;
    this.props.projectsHeight(height);
  };

  render() {
    return (
      <section
        className="work-container "
        id="works"
        ref={divElement => (this.divElement = divElement)}
      >
        <hr className="projects-hr" />
        <h2 className="text-center h1">Projects</h2>
        <hr className="projects-hr" />
        <div className="container">
          <Projects projects={projects} />
        </div>
        <br />
      </section>
    );
  }
}

export default ProjectsMain;
