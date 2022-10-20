import { Link } from 'react-router-dom';
import React from 'react';
      
function Navbar(props) {
    return (
      // Navbar
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
      </nav>
    )
}

export default Navbar;