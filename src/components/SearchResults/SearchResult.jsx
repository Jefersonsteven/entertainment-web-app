import React from "react";
import { Card } from "../Card/Card";
import "./SearchResult.scss";

function SearchResults({ data, searchValue }) {


  return(
    <div className="SearchResult">
      <div className="SearchResults">
      {data.length > 0 && <p>Found {data.length} results for '{searchValue}' </p>}
      {data.length < 1 && <p>Not Found results for {searchValue} </p>}
      <div className="SearchResults__container">
      {data?.map(item => {
        return (
          <Card
            className="Card"
            key={item?.title}
            title={item?.title}
            year={item?.year}
            category={item?.category}
            rating={item?.rating}
            thumbnail={item?.thumbnail}
            isBookmarked={item.isBookmarked}
            isTrending={item.isTrending}
          />
        )
      })}
      </div>
    </div>
    </div>

  )
}

export { SearchResults };