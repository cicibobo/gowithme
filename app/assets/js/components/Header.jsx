import React from 'react';
import {Link} from 'react-router-dom';

export default  ()=>{
  return(
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><Link to='/signin' >Sign In</Link></li>
          <li><Link to='/signup' >Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}
