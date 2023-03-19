import { data } from "../data/data";
import { 
  UPDATE_SEARCH_VALUE, 
  ADD_TO_FAVORITES, 
  REMOVE_FAVORITE,
  UPDATE_ALL,
  UPDATE_CARDS,
  UPDATE_TRENDING,
  UPDATE_MOVIES,
  UPDATE_TVSERIES,
  SET_RESULTS
} from "./action";

const initialState = {
  all: [ ...data ],
  cards: data.filter(item => item.isTrending != true),
  trending: data.filter(item => item.isTrending === true),
  bookmarked: data.filter(item => item.isBookmarked === true),
  movies: data.filter(item => item.category === 'Movie'),
  tvseries: data.filter(item => item.category === 'TV Series'),
  searchValue: '',
  results: [],
};

function update(updateState, action) {
  let indexTemp;
  const foreach = updateState.forEach((element, index) => {
    if (element.title === action.payload.title) indexTemp = index;
  });
  const arr = [...updateState];
  arr.splice(indexTemp, 1, action.payload.obj);

  return arr;
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        bookmarked: [...state.bookmarked, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        bookmarked: state.bookmarked.filter(
          (favorite) => favorite.title !== action.payload
        ),
      };
    case UPDATE_ALL:
      return {
        ...state,
        all: update(state.all, action)
      };
    case UPDATE_CARDS:
      return {
        ...state,
        cards: update(state.cards, action)
      };
    case UPDATE_TRENDING:
      return {
        ...state,
        trending: update(state.trending, action)
      };
    case UPDATE_MOVIES:
      return {
        ...state,
        movies: update(state.movies, action)
      };
    case UPDATE_TVSERIES:
      return {
        ...state,
        tvseries: update(state.tvseries, action)
      };
    case SET_RESULTS:
      return {
        ...state,
        results: [ ...action.payload ]
      }

    default:
      return { ...state };
  }
}

export { rootReducer };
