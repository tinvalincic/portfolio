import React from "react";

const FullScreen = props => {
    return (
        <div
            className="full-screen"
            style={{ backgroundColor: props.backgroundColor }}
        >
            <div className="container">{props.children}</div>
        </div>
    );
};

export default FullScreen;
