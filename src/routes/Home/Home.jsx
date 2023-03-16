import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Cards/Cards";
import { Trending } from "../../components/Trending/Trending";
import "./Home.scss";


function Home() {
  const data = useSelector(state => state.app.cards);

  return(
    <Fragment>
      <Trending />
      <div className="Home">
        <h2 className="Title">Recommend for you</h2>
        <Cards data={data}/>
      </div>
    </Fragment>
  )
}

export { Home };