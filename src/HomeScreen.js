import React from "react";
import FullScreen from "./Components/FullScreen";
import HomeLink from "./HomeLink";

const HomeScreen = () => {
    const userData = [
        {
            icon: "fas fa-envelope",
            content: (
                <a href="mailto:tinvalinc@gmail.com" className="link">
                    tinvalinc@gmail.com
                </a>
            )
        },
        {
            icon: "fas fa-phone",
            content: "+385917225722"
        },
        {
            icon: "fab fa-github",
            content: (
                <a
                    href="https://github.com/tinvalincic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                    https://github.com/tinvalincic
                </a>
            )
        }
    ];
    return (
        <FullScreen backgroundColor="#031627">
            <div className="home-left">
                <h1 className="home-name">Tin Valinčić</h1>
                <h2 className="home-title">JavaScript developer</h2>
            </div>
            <div className="home-right">
                {userData.map((data, index) => (
                    <HomeLink
                        key={"home-data" + index}
                        icon={data.icon}
                        content={data.content}
                    />
                ))}
            </div>
        </FullScreen>
    );
};

export default HomeScreen;
