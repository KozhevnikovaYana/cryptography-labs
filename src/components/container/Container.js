import React from "react";
import Container from "react-bootstrap/Container";

const ContainerRx = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default ContainerRx;
