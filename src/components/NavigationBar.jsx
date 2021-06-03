import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }


  .navbar-brand, .navbar-nav .nav-link {
    
    color: #bbb;

    &:hover {
      color: white;
    }
  }

`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"> Desktop Finance </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/"> Home </Nav.Link>
          <Nav.Link as={Link} to="/about"> About </Nav.Link>
          <Nav.Link as={Link} to="/payroll"> Payroll </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;