import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {ElGamalDigitalSignatureAlgorithm} from "./ElGamalDigitalSignatureAlgorithm";

export default class ElGamalDigitalSignatureForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            p: '',
            g: '',
            x: '',
            y: '',
            k: '',
            r: '',
            u: '',
            s: '',
            ans1: '',
            ans2: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        const {message, p, g} = this.state;
        this.runAlgorithm(message, p, g);
    };

    runAlgorithm = (message, p, g) => {
        const m = parseInt(message);
        const pNumber = parseInt(p);
        const gNumber = parseInt(g);
        const [x, y, k, r, u, s, ans1, ans2] = ElGamalDigitalSignatureAlgorithm(m, pNumber, gNumber);
        this.setState({
            p: p,
            g: g,
            message: m,
            x: x,
            y: y,
            k: k,
            r: r,
            u: u,
            s: s,
            ans1: ans1,
            ans2: ans2
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
                            value={this.state.message}
                            onChange={e => this.setState({message: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>P</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.p}
                            onChange={e => this.setState({p: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>G</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.g}
                            onChange={e => this.setState({g: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>открытый ключ y</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.y}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>закрытый ключ x</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.x}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>k</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.k}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>r</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.r}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                        <Form.Label>s</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.s}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>левая часть равенства</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.ans1}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                        <Form.Label>правая часть равенства</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.ans2}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
