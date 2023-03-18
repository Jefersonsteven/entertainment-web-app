import React from "react";
import { Card } from "../Card/Card";
import "./Cards.scss";


function Cards({data}) {

  return(
    <div className="Cards">
      {data?.map(item => {
        return (
          <Card
            className="Card"
            key={item.title}
            title={item.title}
            year={item.year}
            category={item.category}
            rating={item.rating}
            thumbnail={item.thumbnail}
            isBookmarked={item.isBookmarked}
            isTrending={item.isTrending}
          />
        )
      })}
    </div>
  )
}

export { Cards };