import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Icons/Logo/Logo"
import avatar from "../Icons/image-avatar.png"

function Nav() {

  return(
    <nav className="Nav">
      <div>
        <Logo/>
        <div className="Menu">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tvseries">Tv Series</Link>
          <Link to="/bookmarkedmovies">Bookmarked Movies</Link>
        </div>
        <div className="User">
          <img src={avatar} alt="Profile"/>
        </div>
      </div>
    </nav>
  )
}

export { Nav };