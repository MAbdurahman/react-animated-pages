/*===========================================
            components/Navbar.jsx
===========================================*/
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
   //**************** State Values ****************//
   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

   //**************** Functionality ****************//
   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

   console.log(isNavCollapsed);
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
         <span className="navbar-brand mb-0 h1">Brand Name</span>
         <button 
         className="navbar-toggler" 
         type="button" 
         data-toggle="collapse" 
         data-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup"
         aria-expanded={!isNavCollapsed}
         aria-label="Toggle navigation"
         onClick={handleNavCollapse}
         >
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
               <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active">Home</NavLink>
               <NavLink exact to="/about" className="nav-item nav-link" activeClassName="nav-item nav-link active">About</NavLink>
               <NavLink exact to="/skills" className="nav-item nav-link" activeClassName="nav-item nav-link active">Skills</NavLink>
               <NavLink exact to="/portfolio" className="nav-item nav-link" activeClassName="nav-item nav-link active">Portfolio</NavLink>
               <NavLink exact to="/contact" className="nav-item nav-link" activeClassName="nav-item nav-link active">Contact</NavLink>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;
