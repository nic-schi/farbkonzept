import React from 'react';
import {Button} from "react-bootstrap";

import "./app.scss";
import {Link} from "react-router-dom";


function App() {
    return (
        <div className={"wrapper"}>
            <h1>Farbkonzept</h1>
            <small>Erlebnisbauernhof WetterWind</small>

            <Link to={"/farbkonzept"} className={"farbkonzept"}>
                <Button>Start</Button>
            </Link>

            <Link to={"/auswertung"} className={"auswertung"}>
                <Button size={"sm"} variant={"outline-dark"}>Auswertung</Button>
            </Link>
        </div>
    );
}

export default App;
