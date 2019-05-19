import React from "react";

const ProjectText = props => {
    return (
        <p className={"project-text" + (props.class ? " " + props.class : "")}>
            <span className="project-text-label">{props.label}</span>
            {props.value ? (
                <span className="project-body-highlighted">{props.value}</span>
            ) : (
                ""
            )}
        </p>
    );
};

export default ProjectText;
