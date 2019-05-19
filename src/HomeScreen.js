import React from "react";
import FullScreen from "./Components/FullScreen";
import ScreenLeft from "./Components/ScreenLeft";
import ScreenRight from "./Components/ScreenRight";
import HomeLink from "./HomeLink";
import Container from "./Components/Container";

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
                    github profil
                </a>
            )
        },
        {
            icon: "fab fa-linkedin",
            content: (
                <a
                    href="https://www.linkedin.com/in/tin-valinčić-382545150/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                    Linkedin profil
                </a>
            )
        }
    ];
    return (
        <FullScreen backgroundColor="var(--dark-blue)" class="homescreen">
            <Container>
                <ScreenLeft>
                    <h1 className="home-name">Tin Valinčić</h1>
                    <h2 className="home-title">JavaScript developer</h2>
                </ScreenLeft>
                <ScreenRight>
                    {userData.map((data, index) => (
                        <HomeLink
                            key={"home-data" + index}
                            icon={data.icon}
                            content={data.content}
                        />
                    ))}
                </ScreenRight>
            </Container>
        </FullScreen>
    );
};

export default HomeScreen;
