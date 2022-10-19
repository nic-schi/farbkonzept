import React, {Component, createRef, RefObject} from "react";
import {Color} from "../../functions/Color";
import {Button} from "react-bootstrap";
import {begriffe} from "../../Begriffe";
import {Link} from "react-router-dom";


export type BegriffType = {
  l: string,
  r: string
}

class Farbkonzept extends Component<any, any> {
    private pri: RefObject<Color> = createRef<Color>();
    private sek: RefObject<Color> = createRef<Color>();

    pushToStorage = (name: string, values: number[]) => {
        let realName = `farbkonzept-${name}`;
        let rawStorage = localStorage.getItem(realName);
        let newStorage: number[][] = [];

        if (rawStorage !== null) {
            let storage: number[][] = JSON.parse(rawStorage);
            storage.push(values);
            newStorage = storage;
        } else {
            newStorage.push(values);
        }
        localStorage.setItem(realName, JSON.stringify(newStorage));
    }

    onSubmit = () => {
        let pri = this.pri.current?.getValues();
        let sek = this.sek.current?.getValues();

        if (this.hasEmpty(pri) || this.hasEmpty(sek)) {
            alert("Bitte alles ausfüllen!");
        } else {
            this.pushToStorage("pri", pri as unknown as number[]);
            this.pushToStorage("sek", sek as unknown as number[]);

            this.pri.current?.clear();
            this.sek.current?.clear();

            alert("Vielen Dank!");
        }
    }

    hasEmpty = (values: (number | null | undefined)[] | undefined): boolean => {
        if (values) {
            return values.some(e => e === null);
        }
        return true;
    }

    render = () => {
        return (
            <div>
                <h2>Primäre Farbe</h2>
                <Color
                    name={"pri"}
                    ref={this.pri}
                    color={"#3e7c17"}
                    begriffe={begriffe}
                />

                <hr />

                <h2>Sekundäre Farbe</h2>
                <Color
                    name={"sek"}
                    ref={this.sek}
                    color={"#f4a442"}
                    begriffe={begriffe}
                />

                <Button onClick={this.onSubmit} variant={"success"} style={{marginRight: "0.25rem"}}>
                    Absenden
                </Button>

                <Link to={"/"}>
                    <Button>
                        Zurück
                    </Button>
                </Link>
            </div>
        );
    }

}

export default Farbkonzept;