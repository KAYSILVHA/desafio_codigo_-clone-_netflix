import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style/style.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className='container'>
      <Navbar color="dark" dark expand="md">
        <Container className='w-100 d-flex align-items-center justify-content-between'>
          <NavbarBrand href="/">CINAMACAS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className='float-right' isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/movies">Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/series">Series</NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
              {/* Implementar Barra de pesquisa */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

    </header>
  );
}

export default Header;
