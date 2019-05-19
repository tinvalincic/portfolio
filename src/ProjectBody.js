import React from "react";
import ProjectText from "./ProjectText";
import ProjectLink from "./ProjectLink";
import FunctionalityList from "./FunctionalityList";

const ProjectBody = props => {
    return (
        <div className="project-body">
            <ProjectText
                label="Korištene tehnologije:"
                value={props.technologies}
            />
            <ProjectText label="Opis aplikacije:" value={props.description} />
            {props.link ? (
                <ProjectLink label="Link do aplikacije:" link={props.link} />
            ) : (
                ""
            )}
            {props.github ? (
                <ProjectLink label="Github aplikacije:" link={props.github} />
            ) : (
                ""
            )}
            {props.text ? <ProjectText label={props.text} /> : ""}
            {props.functionalities ? (
                <>
                    <ProjectText
                        label="Funkcionalnosti:"
                        class="project-functionalities-heading"
                    />
                    <FunctionalityList
                        functionalities={props.functionalities}
                    />
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default ProjectBody;
