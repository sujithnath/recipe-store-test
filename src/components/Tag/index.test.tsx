import React from 'react';
import { render } from '@testing-library/react';
import Tag from './index';

describe('<Tag />', () => {
  test('Matches Tag content', () => {
    const { queryByText } = render(
      <Tag tag="Tag" />
    );
    expect(queryByText(/Tag/i)).toBeTruthy();
  });
});
