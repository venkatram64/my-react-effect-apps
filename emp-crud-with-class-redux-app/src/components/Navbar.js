import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const isHighlight = ({ isActive }) => ({
    backgroundColor: isActive ? "white" : "",
  });

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" style={isHighlight} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={isHighlight} to="/employees">
              Employees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={isHighlight} to="/counter">
              Counter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={isHighlight} to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={isHighlight} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
  )
};

export default Navbar;
