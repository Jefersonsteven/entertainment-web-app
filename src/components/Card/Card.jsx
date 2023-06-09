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
import { Movie } from "../Icons/Movie";
import { TvSeries } from "../Icons/Tvseries";
import { setResults } from "../../app/action";
import { useLocation } from "react-router-dom";

function Card({ title, year, category, rating, thumbnail, isBookmarked, isTrending, className }) {
  const dispatch = useDispatch();
  const results = useSelector(state => state.app.results);
  const pathname = useLocation();

  function update(updateState, action) {
    let indexTemp;
    const foreach = updateState.forEach((element, index) => {
      if (element.title === action.payload.title) indexTemp = index;
    });
    const arr = [...updateState];
    arr.splice(indexTemp, 1, action.payload.obj);
  
    return arr;
  }

  const action = { 
    payload: {
      title: title, 
      obj: { title, year, category, rating, thumbnail, isBookmarked: !isBookmarked, isTrending }
    }
  }

  function handleClick() {
    if (isBookmarked) {
      dispatch(removeFavorite(title));
      dispatch(setResults(update(results, action)));
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
      dispatch(setResults(update(results, action)));
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
    <div className={className}>
      <div>
        <div onClick={handleClick} className={`${isBookmarked}`}>
          <Bookmark />
        </div>
        {isTrending === false && (<img src={thumbnail?.regular?.small} alt={title} />)}
        {isTrending === true && (<img src={thumbnail?.trending?.small} alt={title} />)}
        {pathname === '/' && isTrending === true && screen.width > 500 && (<img src={thumbnail?.trending?.large} alt={title} />)}
      </div>
      <div>
        <div>
          <p>{year}</p>
          <p>•</p>
          <p>
            {category === 'Movie' && (<Movie fill={"#fff"}/>)}
            {category === 'TV Series' && (<TvSeries fill={"#fff"}/>)}
            {category}
          </p>
          <p>•</p>
          <p>{rating}</p>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export { Card };