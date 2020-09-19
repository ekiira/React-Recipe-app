import { combineReducers } from 'redux';
import recipes from './recipes.reducer';
import recipe from './recipe.reducer'

const rootReducer = combineReducers({
  recipes,
  recipe
});

export default rootReducer;