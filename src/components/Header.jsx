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
} from "reactstrap";
import { Link } from "react-router-dom";
import MyCV from '../assets/CV/CV_BAR_2020-10.pdf';

const Header = (props) => {
  //Hooks para el navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const descargarCV = () => {
    ('../assets/CV/CV_BAR_2020-10.pdf');
  }

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
                  <NavLink href="https://www.linkedin.com/in/brian-antonio-rios-a259b1133/" target="_blank">
                    <i class="fa fa-linkedin text-primary"></i>
                    {" "}
                    LinkedIn
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="mailto:rios.ba95@gmail.com" target="_blank">
                    <i class="fa fa-google text-danger"></i>
                    {" "}
                    Gmail
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <a style={{color:"inherit"}} target="_blank" download="My_pdf.pdf" href={MyCV}>
                  Descargar CV</a>
              </NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
