import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectsMain from "./projects_main";
import VoltAd from "../components/voltAd";

const ProjectsRouter = () => (
  <Router>
    <div >
      <ul className="project-router">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/voltAd">About</Link>
        </li>
      </ul>

      <Route path="/" component={ProjectsMain} />
      <Route path="/voltAd" component={VoltAd} />
    </div>
  </Router>
);

export default ProjectsRouter;
  