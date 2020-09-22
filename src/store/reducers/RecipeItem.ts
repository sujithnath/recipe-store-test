import { STORE_RECIPE_ITEM_SUCCESS, STORE_RECIPE_ITEM_ERROR } from '../constants';
import { RecipeItemActions } from '../actions/recipeItemActions';
import { IRecipeItemFormatted } from '../../containers/Recipes/types';

const initialState: IRecipeItemFormatted = {
  id: null,
  calories: null,
  description: null,
  title: null,
  itemPic: undefined,
  chefName: null,
  tagNames: [],
};

const RecipeItem = (state = initialState, action: RecipeItemActions): IRecipeItemFormatted => {
  switch (action.type) {
    case STORE_RECIPE_ITEM_SUCCESS:
      return { ...action.payload };

    case STORE_RECIPE_ITEM_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default RecipeItem;
