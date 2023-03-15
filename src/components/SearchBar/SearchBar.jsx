import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { updateSearchValue } from "../../app/action";
import { SearchResults } from "../SearchResults/SearchResult";

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.app.searchValue);
  const data = useSelector(state => state.app.cards);
  const [ Results, setResult ] = useState([]);
  const { pathname } = useLocation();

  
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
  
  function handleInput(event) {
    const value = event.target.value;
    dispatch(updateSearchValue(value));
  }

  return(
    <Fragment>
      <div className="SearchBar">
        <form action="">
          <label htmlFor="">
            <p>🔍</p>
            <input
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