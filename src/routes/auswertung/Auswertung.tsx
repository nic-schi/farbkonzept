import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {begriffe} from "../../Begriffe";


class Auswertung extends Component<any, any> {

    getSum = (name: string, index: number, search: number): number => {
        let rawStorage = localStorage.getItem(`farbkonzept-${name}`);

        if (rawStorage) {
            let storage: number[][] = JSON.parse(rawStorage);

            return storage.reduce((a, b) => {
                if (b[index] === search) {
                    return a + 1;
                }
                return a;
            }, 0);
        }
        return 0;
    }

    clear = () => {
        let returned = window.confirm("Sind Sie sicher?");
        if (returned) {
            localStorage.clear();
            this.forceUpdate();
        }
    }

    getCount = (name: string) => {
        let rawStorage = localStorage.getItem(`farbkonzept-${name}`);
        if (rawStorage) {
            let storage: number[][] = JSON.parse(rawStorage);
            return storage.length;
        }
        return 1;
    }

    downloadOne = (name: string) => {
        let rawStorage = localStorage.getItem(`farbkonzept-${name}`);
        if (rawStorage) {
            let storage: number[][] = JSON.parse(rawStorage);
            const json = JSON.stringify(storage, null, 2);
            const blob = new Blob([json], { type: "application/json" });
            const href = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = href;
            link.download = name + ".json";
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        } else {
            alert("Noch nichts vorhanden!");
        }
    }

    download = () => {
        this.downloadOne("pri");
        this.downloadOne("sek");
    }

    render = () => {
        let rawStorage = localStorage.getItem(`farbkonzept-pri`);
        let storage: number[][] = [];
        if (rawStorage) {
            storage = JSON.parse(rawStorage);
        }

        return (
            <div>
                <h2>Anzahl: <b>{(storage.length)}</b></h2>

                <h2>Primäre Farbe</h2>
                <Table variant={"light"} striped bordered>
                    <thead>
                    <tr>
                        <th/>
                        <th>++</th>
                        <th>+</th>
                        <th>0</th>
                        <th>-</th>
                        <th>--</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {begriffe.map((begriff: { l: string; r: string; }, index: number) => {
                        return (
                            <tr>
                                <td>{begriff.l}</td>
                                <th>{this.getSum("pri", index, 0)}</th>
                                <th>{this.getSum("pri", index, 1)}</th>
                                <th>{this.getSum("pri", index, 2)}</th>
                                <th>{this.getSum("pri", index, 3)}</th>
                                <th>{this.getSum("pri", index, 4)}</th>
                                <td>{begriff.r}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <Table variant={"light"} striped bordered>
                    <thead>
                    <tr>
                        <th/>
                        <th>++</th>
                        <th>+</th>
                        <th>0</th>
                        <th>-</th>
                        <th>--</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {begriffe.map((begriff: { l: string; r: string; }, index: number) => {
                        return (
                            <tr>
                                <td>{begriff.l}</td>
                                <th>{((this.getSum("pri", index, 0) / this.getCount("pri") * 100)).toFixed(0)}</th>
                                <th>{((this.getSum("pri", index, 1) / this.getCount("pri") * 100)).toFixed(0)}</th>
                                <th>{((this.getSum("pri", index, 2) / this.getCount("pri") * 100)).toFixed(0)}</th>
                                <th>{((this.getSum("pri", index, 3) / this.getCount("pri") * 100)).toFixed(0)}</th>
                                <th>{((this.getSum("pri", index, 4) / this.getCount("pri") * 100)).toFixed(0)}</th>
                                <td>{begriff.r}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>

                <hr/>

                <h2>Sekundäre Farbe</h2>
                <Table variant={"light"} striped bordered>
                    <thead>
                    <tr>
                        <th/>
                        <th>++</th>
                        <th>+</th>
                        <th>0</th>
                        <th>-</th>
                        <th>--</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {begriffe.map((begriff: { l: string; r: string; }, index: number) => {
                        return (
                            <tr>
                                <td>{begriff.l}</td>
                                <th>{this.getSum("sek", index, 0)}</th>
                                <th>{this.getSum("sek", index, 1)}</th>
                                <th>{this.getSum("sek", index, 2)}</th>
                                <th>{this.getSum("sek", index, 3)}</th>
                                <th>{this.getSum("sek", index, 4)}</th>
                                <td>{begriff.r}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <Table variant={"light"} striped bordered>
                    <thead>
                    <tr>
                        <th/>
                        <th>++</th>
                        <th>+</th>
                        <th>0</th>
                        <th>-</th>
                        <th>--</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {begriffe.map((begriff: { l: string; r: string; }, index: number) => {
                        return (
                            <tr>
                                <td>{begriff.l}</td>
                                <th>{((this.getSum("sek", index, 0) / this.getCount("sek")) * 100).toFixed(0)}</th>
                                <th>{((this.getSum("sek", index, 1) / this.getCount("sek")) * 100).toFixed(0)}</th>
                                <th>{((this.getSum("sek", index, 2) / this.getCount("sek")) * 100).toFixed(0)}</th>
                                <th>{((this.getSum("sek", index, 3) / this.getCount("sek")) * 100).toFixed(0)}</th>
                                <th>{((this.getSum("sek", index, 4) / this.getCount("sek")) * 100).toFixed(0)}</th>
                                <td>{begriff.r}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>


                <Link to={"/"} style={{marginRight: "0.25rem"}}>
                    <Button>Zurück</Button>
                </Link>

                <Button
                    onClick={this.download}
                    style={{marginRight: "0.25rem"}}
                >
                    Download
                </Button>

                <Button
                    onClick={this.clear}
                    variant={"danger"}
                >Clear</Button>
            </div>
        );
    }

}

export default Auswertung;