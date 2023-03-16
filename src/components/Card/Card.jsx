import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bookmark } from "../Icons/Bookmark"
import { 
  addToFavorites, 
  removeFavorite, 
  updateAll,
  updateCards,
  updateTrending,
  updateMovies,
  updateTvSeries
} from "../../app/action";
import "./Card.scss"

function Card({ title, year, category, rating, thumbnail, isBookmarked, isTrending }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (isBookmarked) {
      dispatch(removeFavorite(title));
      dispatch(updateAll(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      if(category === 'Movie') {
        dispatch(updateMovies(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
      if(category === 'TV Series') {
        dispatch(updateTvSeries(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
      if(isTrending === true) {
        dispatch(updateTrending(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
      if(isTrending === false) {
        dispatch(updateCards(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
    } else {
      dispatch(addToFavorites({ title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      dispatch(updateAll(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      if(category === 'Movie') {
        dispatch(updateMovies(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
      if(category === 'TV Series') {
        dispatch(updateTvSeries(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
      if(isTrending === true) {
        dispatch(updateTrending(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
      if(isTrending === false) {
        dispatch(updateCards(title, { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }));
      }
    }
  }

  return (
    <div className="Card">
      <div>
        <div onClick={handleClick} className={`${isBookmarked}`}>
          <Bookmark />
        </div>
        <img src={thumbnail?.regular?.small} alt={title} />
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