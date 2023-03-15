export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';


export const updateSearchValue = (value) => {
  return { type: UPDATE_SEARCH_VALUE, payload: value }
}