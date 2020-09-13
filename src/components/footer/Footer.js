import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
    return (
        <Container className="contactInfo" fluid>
            <Row>
                <Col xs={12}>
                    <h6>Кожевникова Яна, группа 17203. 7 семестр, 2020</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
