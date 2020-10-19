import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {RSADigitalSignatureAlgorithm} from "./RSADigitalSIgnatureAlgorithm";

export default class RSADigitalSignatureForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            Na: '',
            Ca: '',
            Da: '',
            s: '',
            w: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        const {message} = this.state;
        this.runRsa(message);
    };

    runRsa = (message) => {
        const [Na, Da, Ca, s, w] =RSADigitalSignatureAlgorithm(message);
        this.setState({
            Na: Na,
            Da: Da,
            Ca: Ca,
            s: s,
            w: w
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
                        <Form.Label>C</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Ca}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>D</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.Da}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
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
                        <Form.Label>Полученное сообщение</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.w}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
