import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavLink,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  //Hooks para el navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Ríos Brian</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link style={{color:"inherit"}} to="/inicio">Inicio</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link style={{color:"inherit"}} to="/timeline">Timeline</Link>
              </NavLink>
            </NavItem>
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
    </React.Fragment>
  );
};

export default Header;
