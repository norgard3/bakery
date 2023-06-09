import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from "../images/bittybakeryhummingbird.png";
import { Link } from "react-router-dom";

 

function Header() {
  return (
<div>
    <Navbar id="navbar">
     <Container>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="justify-content-evenly w-100 align-items-center">

         <Link to="/Projects">Baked Goods</Link>
         <Link to="/About">About</Link>
         <Link to= "/Home"><img alt="logo" src={Logo} width="200" height="100" className="d-inline-block align-top"/></Link>
         <Link to="/Pricing">Pricing</Link>
        <Link to="/Contactme">Contact Me</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
   
  );
}
export default Header;