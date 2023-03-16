import { data } from "../data/data";
import { UPDATE_SEARCH_VALUE } from "./action";


const initialState = {
  all: [ ...data ],
  cards: data.filter(item => item.isTrending != true),
  trending: data.filter(item => item.isTrending === true),
  searchValue: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }

    default:
      return { ...state };
  }
}


export { rootReducer };