import React from 'react';

import {Form, Col, Button} from 'react-bootstrap';
import { diffiHellman } from '../common/functions';

export default class DiffieHellman extends React.Component {
    state = {
        p: '',
        g: '',
        Xa: '',
        Ya: '',
        Xb: '',
        Yb: '',
        Zab: '',
        Zba: ''
    };
    handleSubmit = event => {
        event.preventDefault();
        const { p, g } = this.state;
        this.runDiffHellman(p, g);
    };

    runDiffHellman = (p, g) => {
        const pNumber = parseInt(p);
        const gNumber = parseInt(g);
        let results = diffiHellman(pNumber, gNumber);
        this.setState({
            p: results.p.toString(10),
            g: results.g.toString(10),
            Xa: results.Xa.toString(10),
            Xb: results.Xb.toString(10),
            Ya: results.Ya.toString(10),
            Yb: results.Yb.toString(10),
            Zab: results.Zab.toString(10),
            Zba: results.Zba.toString(10),
        });
    };

    render() {
      return (

      <div class="row mt-lg-5">
          <div class = "col-6 offset-3 shadow-lg p-3 2 bg-white rounded text-xs-center" style={"margin-top: 60px"}>
              <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                      <Form.Group as={Col} md="6">
                          <Form.Label class>P</Form.Label>
                          <Form.Control
                              required
                              type="text"
                              value={this.state.p}
                              onChange={e => this.setState({p: e.target.value})}
                          />
                      </Form.Group>
                      <Form.Group as={Col} md="6" >
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
                          <Form.Label>Xa</Form.Label>
                          <Form.Control
                              readOnly
                              type="text"
                              value={this.state.Xa}
                          />
                      </Form.Group>
                      <Form.Group as={Col} md="6" >
                          <Form.Label>Ya</Form.Label>
                          <Form.Control
                              readOnly
                              type="text"
                              value={this.state.Ya}
                          />
                      </Form.Group>
                  </Form.Row>
                  <Form.Row>
                      <Form.Group as={Col} md="6" >
                          <Form.Label>Xb</Form.Label>
                          <Form.Control
                              readOnly
                              type="text"
                              value={this.state.Xb}
                          />
                      </Form.Group>
                      <Form.Group as={Col} md="6">
                          <Form.Label>Yb</Form.Label>
                          <Form.Control
                              readOnly
                              type="text"
                              value={this.state.Yb}
                          />
                      </Form.Group>
                  </Form.Row>
                  <Form.Row>
                      <Form.Group as={Col} md="6" >
                          <Form.Label>Zab</Form.Label>
                          <Form.Control
                              readOnly
                              type="text"
                              value={this.state.Zab}
                          />
                      </Form.Group>
                      <Form.Group as={Col} md="6">
                          <Form.Label>Zba</Form.Label>
                          <Form.Control
                              readOnly
                              type="text"
                              value={this.state.Zba}

                          />
                      </Form.Group>
                  </Form.Row>
                  <Button type="submit" className="align-content-center" onSubmit={this.handleSubmit}>Расчитать</Button>
              </Form>
          </div>
      </div>
      );
    }
}
