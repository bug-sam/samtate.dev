import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
    const grad_img = require("./assets/grad.jpg");
    const guitar_img = require("./assets/guitar.jpg");

    const aboutParagraphs = [
        <>
            I am currently studying <b>Computer Science</b> at
            <b> Drexel University</b>, with a focus in intelligent systems
            and human-computer interaction. I have completed three co-ops while
            studying at Drexel. Each one has taught me a lot, and they have provided
            opportunities for me to develop and hone professional skills while working
            in real-world business settings.
        </>,
        <>
            During my co-ops I've had the ability to experiment and explore my programming interests.
            So far I've discovered that I like <b>back-end development</b> and <b>DevOps</b>.
            I have around two years of work experience, and I'd like to continue experimenting in the future.
            At school, my favorite class was operating systems. In that class we tinkered with
            <a href="https://github.com/inferno-os/inferno-os"> Inferno OS</a>.
            I had a lot of fun in that class, and I would like to explore working professionally with operating
            systems in the future.
        </>,
        <>
            My biggest interest outside of computer science is <b>music</b>.
            Currently, I play in two bands!
            <a href="https://www.instagram.com/ghostintheatticband/"> Ghost in the Attic </a>
            is a band that I started with my cousin and a couple of our friends.
            We're still trying to find our sound, but we love emo, and are doing our best to play it!
            Check out our latest music on
            <a href="https://ghostintheatticdelco.bandcamp.com/"> Bandcamp</a>!
            I also recently started playing drums for
            <a href="https://www.instagram.com/bristoltooth/"> Bristoltooth</a>.
            I like to describe our sound as "indie" - I know - super vague.
            If you're curious, you can check out everything we've released so far on
            <a href="https://bristoltooth.bandcamp.com/"> Bandcamp</a>!
            Also, feel free to follow us on instagram! we play shows all the time in Philly, and
            instagram is the best place to get updates or to contact us!
        </>,
        <>
            I'm also into <b>anime</b>, and <b>melee</b>.
            If you're into anime, you can check out my
            <a href="https://anilist.co/user/flamuel/"> AniList</a>.
            I'd love to connect and talk anime with other fans!
            Melee has been a quarantine hobby that I've fallen in love with -
            I plan on competing in my first tournament very soon. My smash.gg is
            <a href="https://smash.gg/user/f064c611"> here</a>.
        </>
    ]

    return (
        <div id="about_me">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/about_me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        {aboutParagraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </div>
                    <div className="about-images">
                        <img src={grad_img} alt="me in my cap and gown" />
                        <img src={guitar_img} alt="me plaing guitar" />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}

export default About;
