import { GET_RECIPES, SELECTED_RECIPE, GET_RECIPES_START } from "../action";

const initialState = {
  allRecipes: null,
  loading: false,
  recipe: null,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_START:
      return {
        ...state,
        loading: true
      };
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
        loading: false
      };
    case SELECTED_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
