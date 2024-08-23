import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Tooltip
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style/style.scss";
import LogoNetflix from "./assets/images/Netflix_Logo_PMS.png";
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/auth');
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <header className='container'>
      <Navbar dark expand="md">
        <Container className='w-100 d-flex align-items-center justify-content-between'>
          <NavbarBrand href="/home">
            <img className="logo-image" src={LogoNetflix} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='d-md-flex justify-content-md-end'>
            <Nav className="ml-auto nav d-md-flex" navbar>
              <NavItem className='position-relative d-flex flex-column align-items-center'>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick('/home')}
                  className={location.pathname === '/home' ? 'selected' : ''}
                >
                  Principal
                </NavLink>
                {location.pathname === '/home' && <span className="selected"></span>}
              </NavItem>
              <NavItem className='position-relative d-flex flex-column align-items-center'>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick('/movies')}
                  className={location.pathname === '/movies' ? 'selected' : ''}
                >
                  Filmes
                </NavLink>
                {location.pathname === '/movies' && <span className="selected"></span>}
              </NavItem>
              <NavItem className='position-relative d-flex flex-column align-items-center'>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick('/series')}
                  className={location.pathname === '/series' ? 'selected' : ''}
                >
                  Series
                </NavLink>
                {location.pathname === '/series' && <span className="selected"></span>}
              </NavItem>
              <NavItem>
                <Button
                  color="danger"
                  onClick={handleLogout}
                  className='mt-1'
                  id="logoutButton"
                >
                  <i className="fa-solid fa-xmark"></i>
                </Button>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="logoutButton"
                  toggle={toggleTooltip}
                >
                  Sair
                </Tooltip>
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
