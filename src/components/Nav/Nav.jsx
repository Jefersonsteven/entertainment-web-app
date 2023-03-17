import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../Icons/Logo/Logo"
import avatar from "../Icons/image-avatar.png"
import { Home } from "../Icons/Home";
import { Movie } from "../Icons/Movie";
import { TvSeries } from "../Icons/Tvseries";
import { Bookmarked } from "../Icons/Bookmarked";
import "./Nav.scss";

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="Nav">
      <div>
        <Logo />
        <div className="Menu">
          <Link className="Link" to="/">
            {pathname === '/' && <Home fill={"#FFF"} /> || <Home fill={"#5A698F"} />}
          </Link>
          <Link className="Link" to="/movies">
            {pathname === '/movies' && <Movie fill={"#FFF"} /> || <Movie fill={"#5A698F"} />}
          </Link>
          <Link className="Link" to="/tvseries">
            {pathname === '/tvseries' && <TvSeries fill={"#FFF"} /> || <TvSeries fill={"#5A698F"} />}
          </Link>
          <Link className="Link" to="/bookmarkedmovies">
            {pathname === '/bookmarkedmovies' && <Bookmarked fill={"#FFF"} /> || <Bookmarked fill={"#5A698F"} />}
          </Link>
        </div>
        <div className="User">
          <img src={avatar} alt="Profile" />
        </div>
      </div>
    </nav>
  )
}

export { Nav };