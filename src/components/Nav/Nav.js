// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (

<nav className="navbar navbar-expand-lg text-black  bg-info fs-3 p-3">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className
     ="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav  my-2 my-lg-0 navbar-nav-scroll fs-4 mx-auto ms-10  ">
        <li class="nav-item ">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>





















    );
};

export default Nav;