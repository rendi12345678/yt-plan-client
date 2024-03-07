import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <aside className="side-bar-nav">
      <div>
        <h3 className="nav-title">Cross Share</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Linkedin</Link>
          </li>
          <li>
            <Link to="/">Youtube</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/" className="log-out">
          Log out
        </Link>
      </div>
    </aside>
  );
}

export default Navbar;
