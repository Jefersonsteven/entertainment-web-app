import React from "react";
import { Bookmark } from "../../Icons/Bookmark"
import "./CardTrending.scss"

function CardTrending({
  title,
  year,
  category,
  rating,
  image,
}) {


  return (
    <div className="CardTrending">
      <div>
        <div>
          <Bookmark />
        </div>
        <img src={image?.small} alt={title} />
      </div>
      <div>
        <div>
          <p>{year}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export { CardTrending };