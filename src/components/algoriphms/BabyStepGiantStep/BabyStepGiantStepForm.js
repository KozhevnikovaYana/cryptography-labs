import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import {BabyStepGiantStepAlgorithm} from "./BabyStepGiantStepAlgorithm";
export default class BabyStepGiantStepForm extends React.Component {
    state = {
        y: '',
        a: '',
        m: '',
        k: '',
        p: '',
        x: ''
    };
    handleSubmit = event => {
        event.preventDefault();
        const {y, a, m, k, p } = this.state;
        this.run(y, a, m, k, p);
    };

    run = (y, a, m, k, p) => {
        const yNumber = parseInt(y);
        const aNumber = parseInt(a);
        const mNumber = parseInt(m);
        const kNumber = parseInt(k);
        const pNumber = parseInt(p);
        let x = BabyStepGiantStepAlgorithm(yNumber, aNumber, mNumber, kNumber, pNumber);
        console.log(y,a, m, k, p, x)
        this.setState({
            y: yNumber,
            a: aNumber,
            m: mNumber,
            k: kNumber,
            p: pNumber,
            x: x
        });
    };

    render() {
        return (
            <Form className={"col-6 pt-5 offset-3 shadow-lg p-3 2 bg-white rounded"} onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>y</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.y}
                            onChange={e => this.setState({y: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>a</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.a}
                            onChange={e => this.setState({a: e.target.value})}
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
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>m</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.m}
                            onChange={e => this.setState({m: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>k</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={this.state.k}
                            onChange={e => this.setState({k: e.target.value})}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>x</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.x}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
