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
} from "./action";


const initialState = {
  all: [ ...data ],
  cards: data.filter(item => item.isTrending != true),
  trending: data.filter(item => item.isTrending === true),
  bookmarked: data.filter(item => item.isBookmarked === true),
  movies: data.filter(item => item.category === 'Movie'),
  tvseries: data.filter(item => item.category === 'TV Series'),
  searchValue: '',
};

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
        all: [
          ...state.all.filter((item) => item.title !== action.payload.title),
          action.payload.obj
        ],
      };
    case UPDATE_CARDS:
      return {
        ...state,
        cards: [
          ...state.cards.filter((item) => item.title !== action.payload.title),
          action.payload.obj
        ],
      };
    case UPDATE_TRENDING:
      return {
        ...state,
        trending: [
          ...state.trending.filter((item) => item.title !== action.payload.title),
          action.payload.obj
        ],
      };
    case UPDATE_MOVIES:
      return {
        ...state,
        movies: [
          ...state.movies.filter((item) => item.title !== action.payload.title),
          action.payload.obj
        ],
      };
    case UPDATE_TVSERIES:
      return {
        ...state,
        tvseries: [
          ...state.tvseries.filter((item) => item.title !== action.payload.title),
          action.payload.obj
        ],
      };

    default:
      return { ...state };
  }
}

export { rootReducer };
