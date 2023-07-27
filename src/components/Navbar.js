import React from 'react';
import { Link } from 'react-router-dom';

// Component for the Navbar
const Navbar = (props) => {

  return (
    // Navbar container
    <div className='navbar'>
      <h2>
        <span>ALBUMS</span>
      </h2>

      {/* Button with link to the specified path */}
      <Link to={props.path}>
        <button>{props.page}</button>
      </Link>
    </div>
  );
};

export default Navbar;