import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <img src='https://files.slack.com/files-pri/T0351JZQ0-FAMD93QBG/logomakr_9ufv8t.png'/>

          <Link to='/'>
            <li className="nav-li">Home</li>
          </Link>
          <Link to='/api/events'>
            <li className="nav-li">Events</li>
          </Link>
          <Link to='/api/events/new'>
            <li className="nav-li">New</li>
          </Link>
          <Link to='/api/auth/login'>
            <li className="nav-li">Login</li>
          </Link>
          <Link to='/api/auth/register'>
            <li className="nav-li">Register</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Navbar;
