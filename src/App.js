import React from "react";
import ReactDOM from "react-dom";
import HomeScreen from "./HomeScreen";
import Projects from "./Projects";
import SmallProjects from "./SmallProjects";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <HomeScreen />
            <Projects />
            <SmallProjects />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
