import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (

        <div className="row nav">
            <div className="col-md-6 ms-auto">
            <nav className="navigation  text-white">
                      <NavLink
  to="/home"
 
>
  Home
</NavLink>
                      <NavLink
  to="/courses"
  
>
  Courses
</NavLink>
                      <NavLink
  to="/about"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  About
</NavLink>
                      <NavLink
  to="/contact"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  Contact
</NavLink>
                     
        </nav>
  
            </div>
            <div className="col-md-3">

            </div>
        </div>
        
    
        
    );
};

export default Nav;