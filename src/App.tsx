import React from 'react';
import {Button, Image} from "react-bootstrap";

import "./app.scss";
import {Link} from "react-router-dom";
import kuh from "./Kuh.png";

function App() {
    return (
        <div className={"wrapper"}>
            <h1>Farbkonzept</h1>
            <small>Erlebnisbauernhof WetterWind</small>

            <div>
                <Image src={kuh} />
            </div>

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
