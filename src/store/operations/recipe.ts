import { success, error, RecipeItemActions } from '../actions/recipeItemActions';
import { IRecipeItemFormatted } from '../../containers/Recipes/types';
import { Dispatch } from 'react';

export async function storeRecipeItem(dispatch: Dispatch<RecipeItemActions>, payload: IRecipeItemFormatted) {
  try {
    dispatch(success(payload));
  } catch (e) {
    // TODO
    // console.log(e);
  }
}
