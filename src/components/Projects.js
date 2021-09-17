import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = [
      {
        name: "Survive",
        desc: "A top-down shooter that I made in order to get familiar with C# and Unity.",
        techStack: "Unity, C#",
        source: "",
        link: "https://samuel-tate.itch.io/survive"
      },
      {
        name: "Ghost Buster Game",
        desc: "My final Project for Interactive Computer Graphics. The game engine was created from scratch using WebGL.",
        techStack: "JavaScript, WebGL",
        source: "",
        link: "/ghost_buster"
      },
    ];

    return (
      <div id="my_projects">
        <div className="section-header ">
          <span className="section-title">/my_projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {projects.map((project, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <a href={project.link}>
                  <li className="projects-card">
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon
                          style={{ fontSize: 35 }}
                        ></FolderOpenRoundedIcon>
                      </div>
                      <span className="external-links">
                        {project.source && <a className="github-icon" href={project.source}>
                          <GitHubIcon
                            style={{
                              fontSize: 20,
                              color: "var(--lightest-slate)"
                            }}
                          ></GitHubIcon>
                        </a>}
                      </span>
                    </div>

                    <div className="card-title">{project.name}</div>
                    <div className="card-desc">{project.desc}</div>
                    <div className="card-tech">{project.techStack}</div>
                  </li>
                </a>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
