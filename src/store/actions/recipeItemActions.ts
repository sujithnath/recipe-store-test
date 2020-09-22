import { STORE_RECIPE_ITEM_SUCCESS, STORE_RECIPE_ITEM_ERROR } from '../constants';
import { IRecipeItemFormatted } from '../../containers/Recipes/types';

export const Action = {
  success: STORE_RECIPE_ITEM_SUCCESS,
  error: STORE_RECIPE_ITEM_ERROR,
} as const;

interface ISuccess {
  type: typeof Action.success;
  payload: IRecipeItemFormatted;
}

interface IError {
  type: typeof Action.error;
  error: object | null;
}

export type RecipeItemActions = ISuccess | IError;

const success = (payload: IRecipeItemFormatted): ISuccess => ({
  type: STORE_RECIPE_ITEM_SUCCESS,
  payload,
});

const error = (error: object) => ({
  type: STORE_RECIPE_ITEM_ERROR,
  error,
});

export { success, error };
