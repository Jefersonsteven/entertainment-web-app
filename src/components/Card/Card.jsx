import React from "react";
import { Bookmark } from "../Icons/Bookmark"
import "./Card.scss"

function Card({
  title,
  year,
  category,
  rating,
  image,
}) {


  return (
    <div className="Card">
      <div>
        <div>
          <Bookmark />
        </div>
        <img src={image?.small} alt={title} />
      </div>
      <div>
        <p>{year}</p>
        <p>{category}</p>
        <p>{rating}</p>
      </div>
      <h3>{title}</h3>
    </div>
  )
}

export { Card };