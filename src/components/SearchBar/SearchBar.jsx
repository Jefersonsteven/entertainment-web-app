import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { updateSearchValue } from "../../app/action";
import { SearchResults } from "../SearchResults/SearchResult";
import "./SearchBar.scss";
import { Search } from "../Icons/Search"
import { setResults } from "../../app/action";

function SearchBar() {
  //* hooks
  const { all, movies, tvseries, bookmarked } = useSelector(state => {
    return {
      all: state.app.all,
      movies: state.app.movies,
      tvseries: state.app.tvseries,
      bookmarked: state.app.bookmarked
    }
  });
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.app.searchValue);
  const { pathname } = useLocation();
  const [ data, setData ] = useState([]);

  // * handle del input
  function handleInput(event) {
    const value = event.target.value;
    dispatch(updateSearchValue(value));
  }
  console.log(pathname);

  // * buscador

  useEffect(() => {
    switch(pathname) {
      case '/':
        setData(all);
      break;
      case '/movies':
        setData(movies);
      break;
      case '/tvseries':
        setData(tvseries);
      break;
      case '/bookmarkedmovies':
        setData(bookmarked);
      break;
    }
  
    return () => {
      setData([]);
    }
  }, [pathname])

  useEffect(() => {
    if(searchValue.length  > 0) {

      const temp = data.filter(item => {
        const itemTitle = item.title.toLowerCase();
        const title = searchValue.toLowerCase();
        
        return itemTitle.includes(title);
      });

      dispatch(setResults(temp));
    }

    return () => {
      dispatch(setResults([]));
    }
  }, [searchValue]);

  // * placeholder change value
  const [ placeholder, setPlaceholder ] = useState('');
  useEffect(() => {
    switch(pathname) {
      case '/':
        setPlaceholder('Search for movies or TV series');
      break;
      case '/movies':
        setPlaceholder('Search for movies');
      break;
      case '/tvseries':
        setPlaceholder('Search for Tv series');
      break;
      case '/bookmarkedmovies':
        setPlaceholder('Search for Bookmark shows');
      break;
    }
  }, [pathname]);

  return(
    <Fragment>
      <div className="SearchBar">
        <form action="">
          <label htmlFor="">
            <Search/>
            <input
              placeholder={placeholder}
              type="text"
              onChange={handleInput}
              value={searchValue}
            />
          </label>
        </form>
      </div>
      {searchValue.length >= 1 && <SearchResults/>}
    </Fragment>
    
  )
}

export { SearchBar };