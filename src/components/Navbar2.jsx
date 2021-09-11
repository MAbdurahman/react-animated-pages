import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Navbar2 = () => {


   return (
      <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Brand Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="navbar-nav ml-auto">
                  <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active">Home</NavLink>
                  <NavLink exact to="/about" className="nav-item nav-link" activeClassName="nav-item nav-link active">About</NavLink>
                  <NavLink exact to="/skills" className="nav-item nav-link" activeClassName="nav-item nav-link active">Skills</NavLink>
                  <NavLink exact to="/portfolio" className="nav-item nav-link" activeClassName="nav-item nav-link active">Portfolio</NavLink>
                  <NavLink exact to="/contact" className="nav-item nav-link" activeClassName="nav-item nav-link active">Contact</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Navbar> 
      </>
   )
}

export default Navbar2;
