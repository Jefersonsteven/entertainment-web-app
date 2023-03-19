import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./SearchResult.scss";

function SearchResults({ searchValue }) {
  const results = useSelector(state => state.app.results);

  return(
    <div className="SearchResult">
      <div className="SearchResults">
      {results.length > 0 && <p>Found {results.length} results for '{searchValue}' </p>}
      {results.length < 1 && <p>Not Found results for {searchValue} </p>}
      <div className="SearchResults__container">
      {results?.map(item => {
        return (
          <Card
            className="Card"
            key={item?.title}
            title={item?.title}
            year={item?.year}
            category={item?.category}
            rating={item?.rating}
            thumbnail={item?.thumbnail}
            isBookmarked={item?.isBookmarked}
            isTrending={item?.isTrending}
          />
        )
      })}
      </div>
    </div>
    </div>

  )
}

export { SearchResults };