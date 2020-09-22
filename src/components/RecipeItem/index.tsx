import React from 'react';
import Tag from '../Tag';
import { ItemInfo, PictureHolder, TagHolder, ItemHolder } from './style';

export interface IRecipeItemProps {
  recipeItemHandler: (idx: number) => void,
  index: number;
  itemPic: string;
  title: string;
  tagNames: string[];
}

const RecipeItem: React.FC<IRecipeItemProps> = ({ recipeItemHandler, index, itemPic, title, tagNames = [] }) => {

  const onClickHandler = () => recipeItemHandler(index)

  return (
    <ItemHolder onClick={onClickHandler}>
      <PictureHolder>
        <source srcSet={itemPic} media="(max-width: 460px)" />
        <img src={itemPic} alt="Recipe item" />
      </PictureHolder>
      <ItemInfo>
        <h4>
          {title}
        </h4>
        <TagHolder>
          {
            tagNames.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))
          }
        </TagHolder>
      </ItemInfo>
    </ItemHolder>
  )
}


export default RecipeItem;
