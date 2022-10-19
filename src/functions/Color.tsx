import React, {Component, createRef, RefObject} from "react";
import {Col, Row, Table} from "react-bootstrap";
import {begriffe} from "../Begriffe";
import { BegriffType } from "../routes/farbkonzept/Farbkonzept";

import "./color.scss";
import {Begriff} from "./Begriff";

export interface ColorProps {
    color: string,
    name: string,
    begriffe: BegriffType[]
}

export class Color extends Component<ColorProps, any> {
    private values: RefObject<Begriff>[] = [];

    constructor(props: any) {
        super(props);

        for (let i = 0; i < begriffe.length; i++) {
            this.values.push(createRef());
        }
    }

    getValues = () => {
        return this.values.map((item) => {
            return item.current?.state.value;
        });
    }

    render = () => {
        return (
            <Row>
                <Col>
                    <div className={"color"} style={{backgroundColor: this.props.color}}  />
                </Col>
                <Col>
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
                        {this.props.begriffe.map((begriff, index) => {
                            return (
                                <Begriff
                                    ref={this.values[index]}
                                    name={`${this.props.name}-${index}`}
                                    key={`begriff-${index}`}
                                    l={begriff.l}
                                    r={begriff.r}
                                />
                            )
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }

}