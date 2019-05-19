import React from "react";
import FullScreen from "./Components/FullScreen";
import { smallProjects } from "./projectsList";
import Container from "./Components/Container";
import ProjectBody from "./ProjectBody";
import ProjectHeading from "./ProjectHeading";

const SmallProjects = () => {
    return (
        <>
            <FullScreen backgroundColor="var(--dark-blue)" class="auto-height">
                <Container class="single-grid auto-height ">
                    <h1 className="project-heading">Ostali projekti</h1>
                </Container>
            </FullScreen>
            {smallProjects.map(project => {
                return (
                    <FullScreen
                        key={project.heading.toLowerCase()}
                        backgroundColor="var(--dark-blue)"
                        class="auto-height pt-20 pb-20 small-projects"
                    >
                        <Container class="single-grid auto-height ">
                            <ProjectHeading heading={project.heading} />
                            <ProjectBody
                                technologies={project.technologies}
                                description={project.description}
                                link={project.link}
                                text={project.text}
                            />
                        </Container>
                    </FullScreen>
                );
            })}
        </>
    );
};

export default SmallProjects;
