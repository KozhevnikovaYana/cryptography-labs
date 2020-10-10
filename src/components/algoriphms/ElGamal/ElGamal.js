import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import {ElGamalDecrypt, ElGamalEncrypt, ElGamalGenerate} from "./ElGamalAlgorithm";
const BigInt = require('big-integer');
export default class ElGamalForm extends React.Component {
    state = {
        message: '',
        p: '',
        g: '',
        Ca: '',
        Da: '',
        Cb: '',
        Db: '',
        decipher: ''
    };
    handleSubmit = event => {
        event.preventDefault();
        const { message, p, g, Ca, Da } = this.state;
        this.runElGamal(message, p, g, Ca, Da);
    };

    runElGamal = (message, p, g) => {
        const messageNumber = parseInt(message);
        const pNumber = parseInt(p);
        const gNumber = parseInt(g);
        const [caNumber, daNumber] = ElGamalGenerate(pNumber, gNumber);
        const [cbNumber, dbNumber] = ElGamalGenerate(pNumber, gNumber);
        const [cipher, r] = ElGamalEncrypt(messageNumber, pNumber, dbNumber, gNumber);
        console.log(cipher, r);
        const decipher = ElGamalDecrypt(cipher, pNumber, cbNumber, r);
        console.log(decipher);
        this.setState({
            message: message,
            p: p,
            g: g,
            Ca: caNumber.toString(10),
            Da: daNumber.toString(10),
            Cb: cbNumber.toString(10),
            Db: dbNumber.toString(10),
            decipher: decipher
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
                            value={this.state.Db}
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
                    <Form.Group as={Col} md="12">
                        <Form.Label>Полученное сообщение</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.decipher}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
