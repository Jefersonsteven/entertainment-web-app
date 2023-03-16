import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Cards/Cards";


function Movies() {
  const data = useSelector(state => state.app.movies);

  return(
    <Fragment>
      <div className="Movies">
        <h2 className="Title">Movies</h2>
        <Cards data={data}/>
      </div>
    </Fragment>
  )
}

export { Movies };