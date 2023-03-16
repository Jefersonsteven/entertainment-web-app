import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Cards/Cards";


function BookmarkedMovies() {
  const data = useSelector(state => state.app.bookmarked);

  return(
    <Fragment>
      <div className="TvSeries">
        <h2 className="Title">Bookmarked Movies</h2>
        <Cards data={data}/>
      </div>
    </Fragment>
  )
}

export { BookmarkedMovies };