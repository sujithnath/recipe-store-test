import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecipeItem from './index';

describe('<RecipeItem />', () => {
  test('Matches recipeItem child content', () => {
    const { getByText } = render(
      <RecipeItem recipeItemHandler={() => { }} itemPic="itemPic" index={1} title="title" tagNames={[]} />
    );
    expect(getByText(/title/i)).toBeTruthy();
  });

  test('Matches recipeItem onclick handler', () => {
    let value = 0;
    let result = 1;
    const { getByText } = render(
      <RecipeItem recipeItemHandler={(index) => { value = index }} itemPic="itemPic" index={result} title="title" tagNames={[]} />
    );
    fireEvent.click(getByText('title'))
    expect(value).toBe(1);
  });
});
