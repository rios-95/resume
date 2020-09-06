import React from "react";
import {Container,Row,Col} from 'reactstrap';

const imgStyles = {
  position:"relative",
  width:"100%"
}
const Main = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs="12" sm="12" md={{ size: 8, order: 1, offset: 2 }}>
            <img
              src={require("../assets/img/Brian_profile_workshop_v2.png")}
              alt="Brian"
              style={imgStyles}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
