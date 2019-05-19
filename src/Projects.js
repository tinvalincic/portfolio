import React from "react";
import FullScreen from "./Components/FullScreen";
import { projectsList } from "./projectsList";
import Container from "./Components/Container";
import ProjectBody from "./ProjectBody";
import ProjectHeading from "./ProjectHeading";

const Projects = () => {
    return (
        <>
            {projectsList.map(project => {
                return (
                    <FullScreen
                        key={project.heading.toLowerCase()}
                        backgroundColor="var(--dark-blue)"
                        class="auto-height pt-40 pb-40"
                    >
                        <Container class="single-grid auto-height ">
                            <ProjectHeading
                                heading={project.heading}
                                subheading={project.subheading}
                            />
                            <ProjectBody
                                technologies={project.technologies}
                                description={project.description}
                                functionalities={project.functionalities}
                                link={project.link}
                                github={project.github}
                            />
                        </Container>
                    </FullScreen>
                );
            })}
        </>
    );
};

export default Projects;
