import React, { Fragment } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Trending } from "../../components/Trending/Trending";


function Home() {

  return(
    <Fragment>
      <Trending />
      <div className="Home Container">
        <h2 className="Title">Recommend for you</h2>
        <Cards />
      </div>
    </Fragment>
  )
}

export { Home };