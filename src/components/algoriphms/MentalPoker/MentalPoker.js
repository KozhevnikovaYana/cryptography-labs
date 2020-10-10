import React from 'react';

import {Form, Col, Button} from 'react-bootstrap';
import {MentalPoker} from "./MentalPokerAlgorithm";

export default class MentalPokerForm extends React.Component {
    state = {
        p: '',
        Ca: '',
        Da: '',
        Cb: '',
        Db: '',
        alpha: '',
        betta: '',
        gamma: '',
        aliceCard: '',
        bobCard:''
    };
    handleSubmit = event => {
        event.preventDefault();
        const { p } = this.state;
        this.runMentalPoker(p);
    };

    runMentalPoker = (p) => {
        const pNumber = parseInt(p);
        const [Ca, Da, Cb, Db, cards, aliceCard, bobCard] = MentalPoker(pNumber);
        console.log(Ca, Cb);
        console.log(Da, Db);
        console.log(aliceCard, bobCard);
        this.setState({
            p: p,
            Ca: Ca.toString(),
            Da: Da.toString(),
            Cb: Cb.toString(),
            Db: Db.toString(),
            aliceCard: aliceCard.toString(),
            bobCard: bobCard.toString(),
            alpha: cards[0].toString(),
            betta: cards[1].toString(),
            gamma: cards[2].toString()
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
                            value={this.state.p}
                            onChange={e => this.setState({p: e.target.value})}
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
                    <Form.Group as={Col} md="4">
                        <Form.Label>α</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.alpha}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>β</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.betta}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>γ</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.gamma}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Карта Алисы</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.aliceCard}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Карта Боба</Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={this.state.bobCard}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
            </Form>
        );
    }
}
