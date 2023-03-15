import React from "react";
import { Card } from "../Card/Card";

function SearchResults({ data }) {


  return(
    <div className="SearchResults Container">
      {data?.map(item => {
        return (
          <Card
            key={`1${item?.title}5`}
            title={item?.title}
            year={item?.year}
            category={item?.category}
            rating={item?.rating}
            image={item?.thumbnail?.regular}
          />
        )
      })}
    </div>
  )
}

export { SearchResults };