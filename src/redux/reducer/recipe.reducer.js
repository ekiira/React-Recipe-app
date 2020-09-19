
import { SELECTED_RECIPE } from '../action'

const initialState = {
 recipe: ''
};

const recipeReducer= (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };
      default:
        return state;
  }

}

export default recipeReducer;