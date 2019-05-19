import React from "react";
import FullScreen from "./Components/FullScreen";
import Container from "./Components/Container";

const Footer = () => {
    return (
        <FullScreen backgroundColor="var(--gray)" class="footer">
            <Container class="single-grid auto-height">
                <footer>
                    <p>Tin Valinčić, 2019</p>
                </footer>
            </Container>
        </FullScreen>
    );
};

export default Footer;
