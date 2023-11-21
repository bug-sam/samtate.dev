import React from "react";

import "../styles/Intro.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

const Intro = () => {
    return (
        <div id="intro">
            <span className="intro-title">
                hi, my name is
                <span className="intro-name"> sam</span>
            </span>
            <FadeInSection>
                <div className="intro-desc">
                    I'm a software engineer who currently lives in Philadelphia.
                    I'm interested in full-stack development, DevOps, and OS development.
                    My personal interests include music, anime, and the video game
                    Super Smash Bros. Melee.
                    I prefer to be referred to using
                    <span className="intro-pronouns"> they/them </span>
                    pronouns!
                </div>
                <a
                    href="mailto:samuel.tate@outlook.com"
                    className="intro-contact"
                >
                    <EmailRoundedIcon></EmailRoundedIcon>
                    <span className="intro-contact-text">
                        Write to me!
                    </span>
                </a>
            </FadeInSection>
        </div>
    );
}

export default Intro;
