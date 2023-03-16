import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { updateSearchValue } from "../../app/action";
import { SearchResults } from "../SearchResults/SearchResult";

function SearchBar() {
  //* hooks
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.app.searchValue);
  const data = useSelector(state => state.app.all);
  const [ Results, setResult ] = useState([]);
  const { pathname } = useLocation();

  // * handle del input
  function handleInput(event) {
    const value = event.target.value;
    dispatch(updateSearchValue(value));
  }

  // * buscador para Home
  useEffect(() => {
    if(searchValue.length > 0 && pathname === '/' ) {
      const temp = data.filter(item => {
        const itemTitle = item.title.toLowerCase();
        const title = searchValue.toLowerCase();
        
        return itemTitle.includes(title);
      });
      setResult(temp);
    }

    return () => {
      setResult([]);
    }
  }, [searchValue]);

  // * placeholder change value
  const [ placeholder, setPlaceholder ] = useState('');
  useEffect(() => {
    switch(pathname) {
      case '/':
        setPlaceholder('Search for Movies or TV series');
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
            <p>🔍</p>
            <input
              style={{color: 'black'}}
              placeholder={placeholder}
              type="text"
              onChange={handleInput}
              value={searchValue}
            />
          </label>
        </form>
      </div>
      {searchValue.length >= 1 && <SearchResults data={Results} />}
    </Fragment>
    
  )
}

export { SearchBar };