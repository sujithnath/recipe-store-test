import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RecipeInfo from './index';

const mockStore = configureMockStore();
const store = mockStore({
  recipeItem: {
    id: 1,
    calories: 123,
    description: 'description',
    title: 'title',
    itemPic: 'itemPic',
    chefName: 'chefName',
    tagNames: ['tagNames'],
  }
});

function renderWithRedux(ui: any) {
  return { ...render(<Provider store={store}>{ui}</Provider>) };
}

describe('<RecipeInfo />', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  test('Matches RecipeInfo child content', () => {
    const { queryByText } = renderWithRedux(<RecipeInfo />);
    expect(queryByText(/title/i)).toBeTruthy();
  });
});
