import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { CardTrending } from "./CardTrending/CardTrending";
import "./Trending.scss";

function Trending() {
  const data = useSelector(state => state.app.trending);


  return (
    <div className="Trending">
      <h2>Trending</h2>
      <div className="Trending__container">
        {data?.map(item => {
          return (
          <CardTrending
            key={item?.title}
            title={item?.title}
            year={item?.year}
            category={item?.category}
            rating={item?.rating}
            image={item?.thumbnail?.trending}
            isBookmarked={item?.isBookmarked}
          />
          )
        })}
      </div>
    </div>
  )
}

export { Trending };