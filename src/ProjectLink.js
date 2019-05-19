import React from "react";

const ProjectLink = props => {
    return (
        <p
            className={
                "project-text project-link" +
                (props.class ? " " + props.class : "")
            }
        >
            <span className="project-text-label">{props.label}</span>
            {props.link ? (
                <a
                    href={props.link}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.link}
                </a>
            ) : (
                ""
            )}
        </p>
    );
};

export default ProjectLink;
