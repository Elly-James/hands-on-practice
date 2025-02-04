// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {

  //responsible for the react routing process
  //Here, we're using Link component from react-router-dom to render links with proper routing
  //The 'to' prop in Link component is used to specify the path that the link will navigate to
  //The 'activeClassName' prop in Link component is used to add a CSS class to the link when it's active (selected)

  //The active class in the CSS is defined in the App.css file as 'active'

  //This component is rendered in the App.js file, and it's used in the Header component

  //The Header component is also responsible for rendering the navigation links, which are provided as children of the Header component

  //The navigation links are rendered as list items using the <li> and <a> tags, and they are wrapped in a <nav> tag for proper styling

  //The navigation links are linked to the '/' and '/mymovies' paths, which correspond to the MovieCollection and MyMovies components, respectively

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

