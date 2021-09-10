import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const image = require("./assets/me.png");

    const aboutParagraphs = [
      <>
        I am currently studying <b>Computer Science</b> at
        <b> Drexel University</b>, with a focus in intelligent systems 
        and human-computer interaction. I have completed three co-ops while
        studying at Drexel. Each one has taught me a lot, and they have all been
        super good experiences.
      </>,
      <>
        During my co-ops I've had the ability to experiment and try to find out what I'm into.
        So far I've discovered that I like <b>back-end development</b> and <b>DevOps</b>.
        I still only have around two years of work experience though, so I'd like to continue
        experimenting in the future. At school, my favorite class was operating systems. In that
        class we tinkered with <a href="https://github.com/inferno-os/inferno-os">Inferno OS</a>.
        I had a lot of fun in that class, and kind of want to explore working with operating
        systems in the future.
      </>,
      <>
        My hobbies are <b>music</b>, <b>anime</b>, and <b>melee</b>.
        My goal with music is to play a house show somewhere in West Philly
        with some of the people I jam with. If you're into anime, you can check
        out my <a href="https://anilist.co/user/flamuel/">AniList</a> and judge my taste.
        Melee has been a quarantine hobby that I've fallen in love with -
        I plan on competing in my first tournament very soon. My smash.gg is 
        <a href="https://smash.gg/user/f064c611"> here</a>.
      </>
    ]

    const tech_stack = [
      "Python",
      "JavaScript",
      "C#",
      "C",
      "AWS",
      "Azure",
      "Git",
    ];

    return (
      <div id="about_me">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/about_me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {aboutParagraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              {"Here are some technologies I have experience working with:"}
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
            <div className="about-image">
              <img src={image.default} alt="['L_']"/>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
