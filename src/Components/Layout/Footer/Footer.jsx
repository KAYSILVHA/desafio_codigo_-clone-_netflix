import { useState } from 'react'
import "./assets/style/style.scss"
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import LogoNetflix from "./assets/images/logo-netflix.png"


function Footer() {

  return (
    <footer className='container-fluid'>
      <Container>
        <div className='d-flex align-items-center text-lg-start text-center justify-content-lg-start justify-content-center'>
          <img className='logo-footer' src={LogoNetflix} alt="Logo Netflix" />
          Questions? Call 1-866-579-7172
        </div>
        <div class="d-flex flex-lg-row flex-column container-navs">
          <Nav className='flex-column align-items-lg-start align-items-center col-lg-3 col-12 text-lg-start text-center'>
            <NavItem>
              <NavLink href="#">FAQ</NavLink>
            </NavItem>
            < NavItem>
              <NavLink href="#">Investor Relations</NavLink>
            </ NavItem>
            <NavItem>
              <NavLink href="#">Ways To Watch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Corporate Information</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Netflix Originals</NavLink>
            </NavItem>
          </Nav>
          <Nav className='flex-column align-items-lg-start align-items-center col-lg-3 col-12 mt-lg-0 mt-3 text-lg-start text-center'>
            <NavItem>
              <NavLink href="#">Help Center</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Terms Of Use</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <Nav className='flex-column align-items-lg-start align-items-center col-lg-3 col-12 mt-lg-0 mt-3 text-lg-start text-center'>
            <NavItem>
              <NavLink href="#">Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Redeem Gift Cards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Privacy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Speed Test</NavLink>
            </NavItem>
          </Nav>
          <Nav className='flex-column align-items-lg-start align-items-center col-lg-3 col-12 mt-lg-0 mt-3 text-lg-start text-center'>
            <NavItem>
              <NavLink href="#">Media Center</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Buy Gift Cards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Cookie Preferences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Legal Notices</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
