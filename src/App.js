import React from "react";
import ReactDOM from "react-dom";
import HomeScreen from "./HomeScreen";

const App = () => {
    return (
        <div>
            <HomeScreen />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
