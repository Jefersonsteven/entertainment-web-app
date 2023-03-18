import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Cards/Cards";
import "./TvSeries.scss";


function TvSeries() {
  const data = useSelector(state => state.app.tvseries);

  return(
    <Fragment>
      <div className="TvSeries">
        <h2 className="Title">Tv Series</h2>
        <Cards data={data}/>
      </div>
    </Fragment>
  )
}

export { TvSeries };