import React from "react";

const Container = props => {
    return (
        <div className={"container" + (props.class ? " " + props.class : "")}>
            {props.children}
        </div>
    );
};

export default Container;
