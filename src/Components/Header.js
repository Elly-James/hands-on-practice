// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="active">
      <Link to="/" className="logo">The KM Movies</Link>
      <nav>
        <ul>
          <li><Link to="/">Movie Collection</Link></li>
          <li><Link to="/mymovies">My Movies</Link></li>
        </ul>
      </nav>
    </header>
  );

}

export default Header;

