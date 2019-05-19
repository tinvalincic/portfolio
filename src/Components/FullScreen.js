import React from "react";

const FullScreen = props => {
    return (
        <div
            className={"full-screen" + (props.class ? " " + props.class : "")}
            style={{ backgroundColor: props.backgroundColor }}
        >
            {props.children}
        </div>
    );
};

export default FullScreen;
