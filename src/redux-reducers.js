import { ADD_TODO } from "./redux-actions.js";
const initialState = [];

// a reducer has a STATE and an ACTION as inputs. It outputs a new STATE
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { description: action.description, heading: action.heading }
      ];
    default:
      return state;
  }
}

export default reducer;
