import React from 'react';
import {Link} from 'react-router-dom';

export default  ()=>{
  return(
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><a href='/api/auth/google' >Sign In with Google</a></li>
          <li><a href='/api/auth/facebook' >Sign In with Facebook</a></li>
        </ul>
      </div>
    </nav>
  );
}
