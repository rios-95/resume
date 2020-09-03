import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavLink,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarBrand,
  NavbarToggler,
  Row,
  Col,
} from "reactstrap";
const imgStyles = {
  position:"relative",
  width:"100%"
}
const Layout = (props) => {
  //Hooks para el navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Brian Rios</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contacto
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    href="https://www.instagram.com/lbokrug"
                    target="_blank"
                  >
                    Instagram
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="mailto:rios.ba95@gmail.com" target="_blank">
                    Gmail
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col xs="12" sm="12" md={{size:8,order:1,offset:2}}>
            <img src={require("../assets/img/Brian_profile_workshop_v2.png")} alt="Brian" style={imgStyles}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
