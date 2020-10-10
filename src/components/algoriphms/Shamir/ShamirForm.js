import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {ShamirEncode} from "./ShamirAlgorithm";

export default class ShamirForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            x: '',
            P: '',
            Ca: '',
            Da: '',
            Cb: '',
            Db: '',
            x1: '',
            x2: '',
            x3: '',
            x4: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        const { x, P } = this.state;
        this.runShamir(x, P);
    };

    runShamir = (x, p) => {
        const pNumber = parseInt(p);
        console.log(pNumber);
        let results = ShamirEncode(x, pNumber);
        console.log(results);
        this.setState({
            Ca: results.Ca.toString(10),
            Cb: results.Cb.toString(10),
            Da: results.Da.toString(10),
            Db: results.Db.toString(10),
            x1: results.x1.toString(10),
            x2: results.x2.toString(10),
            x3: results.x3.toString(10),
            x4: results.x4.toString(10)
        });
    };
    render() {
        return (
            <Form className={"col-6 pt-5 offset-3 shadow-lg p-3 2 bg-white rounded"} onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Сообщение</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.x}
                            onChange={e => this.setState({x: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>P</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.P}
                            onChange={e => this.setState({P: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Ca</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Ca}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Da</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Da}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Cb</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Cb}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Db</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Db}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>x1</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.x1}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>x2</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.x2}

                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>x3</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.x3}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>x4</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.x4}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
