import { FETCH_TODOS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    	// console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};