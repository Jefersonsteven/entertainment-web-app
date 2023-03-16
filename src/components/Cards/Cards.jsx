import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Cards.scss";


function Cards() {
  const data = useSelector(state => state.app.cards);
  const searchValue = useSelector(state => state.app.searchValue);

  return(
    <div className="Cards">
      {data?.map(item => {
        return (
          <Card
            key={item.title}
            title={item.title}
            year={item.year}
            category={item.category}
            rating={item.rating}
            image={item.thumbnail.regular}
          />
        )
      })}
    </div>
  )
}

export { Cards };