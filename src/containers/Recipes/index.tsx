import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import nextId from "react-id-generator";
import { storeRecipeItem } from '../../store/operations/recipe';
import RecipeItem from '../../components/RecipeItem';
import { IRecipes, IItemHashmap, IRecipesItems, IRecipeItemFormatted } from './types';
import { MainTitle, Items } from '../../containers/Recipes/style';

const Reciepes = ({ data }: IRecipes) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [recipeItems, setRecipeItems] = useState<Array<IRecipeItemFormatted>>([]);
  const [itemHashMap, setItemHashMap] = useState<IItemHashmap>({});

  useEffect(() => {
    initSetRecipeItems(data);
  }, []);

  const initSetRecipeItems = async (data: IRecipesItems) => {
    try {
      const { items } = data;

      if (!items) {
        return
      }

      const { Asset, Entry } = data.includes;

      const assetsHashMap: IItemHashmap = {};
      const entryHashMap: IItemHashmap = {};

      Asset.map((asset) => {
        const key = asset.sys.id;
        const value = asset.fields.file;
        assetsHashMap[key] = value;
      })

      Entry.map((entry) => {
        const key = entry.sys.id;
        const value = entry.fields;
        entryHashMap[key] = value;
      })

      const recipeItems = items.map((item) => {
        const { calories, description, title, photo, chef, tags } = item.fields;
        const id = nextId();
        const itemPic = photo ? assetsHashMap[photo.sys.id]['url'] : '';
        const chefName = chef ? chef.sys.id ? entryHashMap[chef.sys.id]['name'] : 'NO NAME' : 'NA';
        const tagNames = tags ? tags.map((tag: any) => tag.sys.id ? entryHashMap[tag.sys.id]['name'] : 'NO TAG') : ['NO TAG']

        return {
          id,
          calories,
          description,
          title,
          itemPic,
          chefName,
          tagNames
        }
      });

      setItemHashMap({ ...assetsHashMap, ...entryHashMap })
      setRecipeItems(recipeItems)
    } catch (error) {
      // Show toaster message
      console.log('error', error);
    }
  }


  const recipeItemHandler = (idx: number) => {
    const item = { ...recipeItems[idx] };
    // using react redux, ideally we can use context or store the data in local storage as well depending upon the usecase
    storeRecipeItem(dispatch, item)
    router.push('/recipe-info');
  }

  return (
    <>
      <MainTitle>Menu Items</MainTitle>
      <Items>
        {recipeItems.map((recipe: any, index) => <RecipeItem
          tagNames={recipe.tagNames}
          key={recipe.id}
          itemPic={recipe.itemPic}
          title={recipe.title}
          index={index}
          recipeItemHandler={recipeItemHandler} />)}
      </Items>
    </>
  )
}


export default Reciepes;
