export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const UPDATE_ALL = 'UPDATE_ALL';
export const UPDATE_CARDS = 'UPDATE_CARDS';
export const UPDATE_TRENDING = 'UPDATE_TRENDING';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const UPDATE_TVSERIES = 'UPDATE_TVSERIES';



export const updateSearchValue = (value) => {
  return { type: UPDATE_SEARCH_VALUE, payload: value }
}

export const addToFavorites = (card) => {
  return { type: ADD_TO_FAVORITES, payload: card }
}

export const removeFavorite = (title) => {
  return { type: REMOVE_FAVORITE, payload: title }
}

export const updateAll = (title, obj) => {
  return { type: UPDATE_ALL, payload: { obj, title } }
}

export const updateCards = (title, obj) => {
  return { type: UPDATE_CARDS, payload: { obj, title } }
}

export const updateTrending= (title, obj) => {
  return { type: UPDATE_TRENDING, payload: { obj, title } }
}

export const updateMovies = (title, obj) => {
  return { type: UPDATE_MOVIES, payload: { obj, title } }
}

export const updateTvSeries = (title, obj) => {
  return { type: UPDATE_TVSERIES, payload: { obj, title } }
}
