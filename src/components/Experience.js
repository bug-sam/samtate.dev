import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

const Experience = () => {
    const tech_stack = [
        "React",
        "AWS",
        "Python",
        "PHP/Laravel",
        "C#",
        "C",
    ];

    return (
        <div id="experience">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/experience</span>
                </div>
                <JobList></JobList>
                <div className="tech-stack">
                    <p>{"Here are the main technologies I have experience working with:"}</p>
                    <ul>
                        {tech_stack.map((tech_item, i) => (
                            <FadeInSection delay={`${i + 1}00ms`} key={i}>
                                <li>{tech_item}</li>
                            </FadeInSection>
                        ))}
                    </ul>
                </div>
            </FadeInSection>
        </div>
    );
}

export default Experience;
