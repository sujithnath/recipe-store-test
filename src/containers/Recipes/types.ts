export interface IRecipeItem {
  id: number;
  calories: string;
  description: string;
  title: string;
  chefName: string;
  photo: { sys: { id: string } };
  chef: { sys: { id: string } };
  itemPic: string;
  tags: Array<{ sys: { id: string } }>;
}

export interface IRecipeItemFormatted {
  id: string | null;
  calories: string | null;
  description: string | null;
  title: string | null;
  itemPic: string | undefined;
  chefName: string | null;
  tagNames: string[];
}

export type RecipesAsset = {
  sys: {
    id: string;
  };
  fields: {
    file: { url: string };
  };
};
export type RecipesEntry = {
  sys: {
    id: string;
  };
  fields: {
    name: string;
  };
};
export type RecipesAssets = Array<RecipesAsset>;
export type RecipesItems = Array<{ fields: IRecipeItem }>;
export type RecipesEntries = Array<RecipesEntry>;

export interface IItemHashmap {
  [key: string]: {
    [key2: string]: string;
  };
}

export interface IRecipesItems {
  items: RecipesItems;
  includes: {
    Asset: RecipesAssets;
    Entry: RecipesEntries;
  };
}

export interface IRecipes {
  data: IRecipesItems;
}
