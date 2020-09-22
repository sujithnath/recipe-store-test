import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RecipeItemState } from '../../store/reducers';
import Tag from '../../components/Tag';
import { TitleH3, TitleH4 } from '../../components/Titles';
import { Information, PictureHolder, ItemDescription, ChefInfo, TagHolder } from './style';

const RecipeInfo = () => {
  const router = useRouter()
  const { recipeItem } = useSelector((state: RecipeItemState) => state);

  const { id, itemPic,
    title,
    description,
    chefName, tagNames = [] } = recipeItem;

  if (!id && typeof window !== 'undefined') {
    router.push('/')
  }

  return (
    <>
      <PictureHolder>
        <source srcSet={itemPic} media="(max-width: 460px)" />
        <img src={itemPic} alt="Recipe Item" />
      </PictureHolder>
      <Information>
        <TitleH3 value={title} />
        <TagHolder>
          {
            tagNames.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))
          }
        </TagHolder>
        <TitleH4 value="What's cooking"></TitleH4>
        <ItemDescription>
          {
            description
          }
        </ItemDescription>
        <ChefInfo>
          <ul>
            <li>Shared with you by: {chefName}</li>
            <li>Finding joy in cooking every day.</li>
          </ul>
        </ChefInfo>
      </Information>
    </>
  )
}


export default RecipeInfo;
