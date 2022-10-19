import {Component} from "react";
import {Form} from "react-bootstrap";
import {header} from "../Begriffe";

export interface BegriffProps {
    l: string,
    r: string,
    name: string
}

interface BegriffState {
    value: null | number
}

class Begriff extends Component<BegriffProps, BegriffState> {
    state = {
        value: null
    }

    valueChange = (hIndex: number) => {
        this.setState({
            value: hIndex
        });
    }

    render = () => {
        return (
            <tr>
                <td>{this.props.l}</td>
                {header.map((header, hIndex) => {
                    return (
                      <td key={`radio-button-${hIndex}`}>
                          <Form.Check
                              onChange={() => {
                                  this.valueChange(hIndex);
                              }}
                              checked={this.state.value !== null && this.state.value === hIndex}
                              type={"radio"}
                              value={header}
                              name={this.props.name}
                          />
                      </td>
                    );
                })}
                <td>{this.props.r}</td>
            </tr>
        );
    }

}

export {
    Begriff
}