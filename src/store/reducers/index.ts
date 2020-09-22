import { combineReducers } from 'redux';

import recipeItemReducer from './RecipeItem';

const rootReducer = combineReducers({
  recipeItem: recipeItemReducer,
});

export type RecipeItemState = ReturnType<typeof rootReducer>;

export default rootReducer;
