import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Recipes from './index';

const mockData = {
  items: [{
    fields: {
      id: 1234,
      calories: '123',
      description: 'description',
      title: 'title',
      itemPic: 'itemPic',
      photo: {
        sys: {
          id: '3'
        }
      },
      chef: {
        sys: {
          id: '1'
        }
      },
      tags: [{
        sys: {
          id: '2'
        }
      }],
      chefName: 'chefName',
      tagNames: ['tagNames'],
    }
  }],
  includes: {
    Asset: [{
      sys: {
        id: '3'
      },
      fields: {
        file: {
          url: 'Asset url'
        }
      }
    }],
    Entry: [{
      sys: {
        id: '3'
      },
      fields: {
        name: 'Asset'
      }
    },
    {
      sys: {
        id: '2'
      },
      fields: {
        name: 'Asset'
      }
    }]
  }
}

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

describe('<Recipes />', () => {
  test('Matches Recipes child content', () => {
    // TODO: Add more test cases
    // const { queryByText } = renderWithRedux(<Recipes data={mockData} />);
  });
});
