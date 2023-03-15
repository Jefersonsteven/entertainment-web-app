import { data } from "../data/data";
import { UPDATE_SEARCH_VALUE } from "./action";


const initialState = {
  cards: [ ...data ],
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