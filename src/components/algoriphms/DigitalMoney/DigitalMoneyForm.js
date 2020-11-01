import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import {DigitalMoneyAlgorithm} from "./DigitalMoneyAlgorithm";
export default class DigitalMoneyForm extends React.Component {
    state = {
        n: '',
        P: '',
        Q: '',
        c: '',
        d: '',
        N: '',
        n_c: '',
        s_c: '',
        s: ''
    };
    handleSubmit = event => {
        event.preventDefault();
        const {n, P, Q, c} = this.state;
        this.run(n, P, Q, c);
    };

    run = (n, P, Q, c) => {
        const nNumber = parseInt(n);
        const pNumber = parseInt(P);
        const qNumber = parseInt(Q);
        const cNumber = parseInt(c);
        console.log(n, P, Q, c);
        const [N, d, r, n_c, s_c, s] = DigitalMoneyAlgorithm(nNumber, pNumber, qNumber, cNumber);
        this.setState({
            P: P,
            Q: Q,
            N: N,
            d: d,
            c: c,
            r: r,
            n: n,
            n_c: n_c,
            s_c: s_c,
            s: s
        });
    };

    render() {
        return (
            <Form className={"col-6 pt-5 offset-3 shadow-lg p-3 2 bg-white rounded"} onSubmit={this.handleSubmit}>
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
                    <Form.Group as={Col} md="6">
                        <Form.Label>Q</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.Q}
                            onChange={e => this.setState({Q: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>c</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.c}
                            onChange={e => this.setState({c: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>d</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.d}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>N</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.N}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>n</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.n}
                            onChange={e => this.setState({n: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>n с крышкой</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.n_c}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>s с крышкой</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.s_c}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>r</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.r}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>s</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.s}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
