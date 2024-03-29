/*
vertical tabs using material-ui
code can be found at:
https://material-ui.com/components/tabs/#vertical-tabs
*/

import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const TabPanel = (props) => {
    const { children, value, index, isHorizontal, ...other } = props;

    if (isHorizontal) {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        );
    } else {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        );
    }
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index, isHorizontal) {
    if (isHorizontal) {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`
        };
    } else {
        return {
            id: `vertical-tab-${index}`
        };
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        display: "flex",
        height: 300
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}));

const JobList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [isHorizontal, setIsHorizontal] = React.useState(false);

    const experienceItems = [
        {
            name: "Comcast",
            title: "Software Developer I",
            duration: "January 2022 - Current",
            desc: [
                "Maintained and improved an Angular application used by thousands of Comcast employees",
                "Maintained and improved backend .NET APIs",
                "Migrated codebase to a monorepo using Nx",
                "Developed pipelines for continuous integration and deployment",
            ]
        },
        {
            name: "Alex's Lemonade Stand",
            title: "Software Developer Co-op",
            duration: "September 2020 - April 2021",
            desc: [
                "Developed python client and CLI for refine.bio",
                "Maintained and improved refine.bio RESTful API",
                "Maintained and improved front-end for refine.bio",
                "Wrote internal and external facing scientific documentation",
            ]
        },
        {
            name: "FS Investments",
            title: "Software and Dev Ops Engineer Co-op",
            duration: "September 2019 - April 2020",
            desc: [
                "Developed serverless Node.js applications using AWS Lambda",
                "Created CI/CD Pipelines for containerized applications using Travis CI and Bitbucket Pipelines",
                "Automated the creation of production website environments using AWS CloudFormation",
                "Set up Jira and wrote documentation in Confluence to establish an agile working environment",
            ]
        },
        {
            name: "OSIsoft",
            title: "Software Developer Co-op",
            duration: "September 2018 - April 2019",
            desc: [
                "Maintained and improved RESTful API for the PI System via bug fixes and feature implementation",
                "Created internal tools used by my team and the company with C# and Powershell",
                "Gained DevOps experience by working with boards, git, and pipelines in Azure DevOps",
            ]
        },
    ];

    useLayoutEffect(() => {
        function updateSize() {
            setIsHorizontal(window.innerWidth < 600);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className={classes.root}>
            <Tabs
                orientation={isHorizontal ? "horizontal" : "vertical"}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={(event, val) => setValue(val)}
                className={classes.tabs}
            >
                {experienceItems.map((experience, i) => (
                    <Tab key={i} label={isHorizontal ? `0${i}.` : experience.name} {...a11yProps(i, isHorizontal)} />
                ))}
            </Tabs>
            {experienceItems.map((experience, i) => (
                <TabPanel key={i} value={value} index={i} isHorizontal={isHorizontal}>
                    <span className="joblist-job-title">
                        {experience.title + " at "}
                    </span>
                    <span className="joblist-job-company">{experience.name}</span>
                    <div className="joblist-duration">
                        {experience.duration}
                    </div>
                    <ul className="job-description">
                        {experience.desc.map((descItem, i) => (
                            <FadeInSection key={i} delay={`${i + 1}00ms`}>
                                <li key={i}>{descItem}</li>
                            </FadeInSection>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </div>
    );
};

export default JobList;
