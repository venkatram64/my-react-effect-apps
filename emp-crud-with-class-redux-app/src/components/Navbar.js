import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light py-2'>
          <Link to="/" className='navbar-brand ml-5'>React Redux App</Link>
          <Link className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Employee
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/" className='navbar-brand ml-5'>List Employee</Link>
              <Link to="/add" className='navbar-brand ml-5'>Add Employee</Link>              
            </div>
          </Link>
      </nav>
  )
};

export default Navbar;
