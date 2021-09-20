import React from "react";

import "../styles/Intro.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
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
    return (
      <div id="intro">
        <span className="intro-title">
          hi, my name is 
          <span className="intro-name"> samuel</span>
        </span>
        <FadeInSection>
          <div className="intro-desc">
            I'm a software engineer who currently lives in Philadelphia.
            I'm interested in back-end development, DevOps, and OS development.
            My personal interests include music, anime, and the video game
            Super Smash Bros. Melee.
          </div>
          <a
            href="mailto:samuel.tate@outlook.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  Write to me!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
