import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {RSA} from "./RSAAlgorithm";

export default class RSAForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            Ca: '',
            Da: '',
            Na: '',
            Cb: '',
            Db: '',
            Nb: '',
            m1: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        const {message} = this.state;
        this.runRsa(message);
    };

    runRsa = (message) => {
        const [Na, Ca, Da, Nb, Cb, Db, m1] = RSA(message);
        this.setState({
            Na: Na,
            Ca: Ca,
            Da: Da,
            Nb: Nb,
            Cb: Cb,
            Db: Db,
            m1: m1
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
                        <Form.Label>Na</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Na}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Nb</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Nb}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Полученное сообщение</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.m1}
                            onChange={e => this.setState({m1: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
