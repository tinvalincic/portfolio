import React from "react";

const FunctionalityList = props => {
    return (
        <ul className="project-functionalities">
            {props.functionalities.map((func, index) => (
                <li key={"func-" + index}>{func}</li>
            ))}
        </ul>
    );
};

export default FunctionalityList;
