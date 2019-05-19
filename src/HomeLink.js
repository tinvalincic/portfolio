import React from "react";

const HomeLink = props => {
    return (
        <div>
            <h3 className="home-data">
                <i className={props.icon + " home-data-icon"} />
                <span className="home-data-content">{props.content}</span>
            </h3>
        </div>
    );
};

export default HomeLink;
