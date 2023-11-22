import React, { useState } from "react";
import { Sidenav } from "rsuite";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

const SidebarNav = () => {
    const [activeKey, setActiveKey] = useState("1");

    const links = [
        <a href="/#">/home</a>,
        <a href="#about_me">/about_me</a>,
        <a href="#experience">/experience</a>,
        <a href="#my_projects">/my_projects</a>,
        <a href="#contact_me">/contact_me</a>
    ];

    return (
        <div className="sidebar-nav">
            {!isMobile && (
                <Sidenav
                    expanded={true}
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
        </div>
    );
}

export default SidebarNav;
