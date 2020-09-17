
import { GET_RECIPES } from '../action'

const initialState = {
 allRecipes: []
};

const recipesReducer= (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: action.payload
      };
      default:
        return state;
  }

}

export default recipesReducer;