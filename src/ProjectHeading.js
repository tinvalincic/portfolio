import React from "react";

const ProjectBody = props => {
    return (
        <div className="project-heading-wrap">
            <h1 className="project-heading">{props.heading}</h1>
            {props.subheading ? (
                <h3 className="project-subheading">{props.subheading}</h3>
            ) : (
                ""
            )}
        </div>
    );
};

export default ProjectBody;
