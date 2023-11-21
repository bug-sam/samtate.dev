import React, { useState } from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

const SidebarNav = () => {
    const [activeKey, setActiveKey] = useState("1");
    const [expanded, setExpanded] = useState(true);

    const links = [
        <a href="/#">/home</a>,
        <a href="#about_me">/about_me</a>,
        <a href="#experience">/experience</a>,
        <a href="#my_projects">/my_projects</a>
    ];

    return (
        <div className="sidebar-nav">
            {!isMobile && (
                <Sidenav
                    expanded={expanded}
                    defaultOpenKeys={["3", "4"]}
                    activeKey={activeKey}
                    onSelect={(key) => setActiveKey(key)}
                    appearance={"subtle"}
                >
                    <Sidenav.Body>
                        <div className="sidebar-links">
                            {links.map((link, i) => (
                                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                                    <div>{link}</div>
                                </FadeInSection>
                            ))}
                        </div>
                    </Sidenav.Body>
                </Sidenav>
            )}
            <div className="sidebar-logos" href="/">
                <a href="mailto:samuel.tate@outlook.com">
                    <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </a>
                <a href="https://github.com/bug-sam">
                    <GitHubIcon style={{ fontSize: 20 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/sam-tate/">
                    <LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>
                </a>
            </div>
        </div>
    );
}

export default SidebarNav;
