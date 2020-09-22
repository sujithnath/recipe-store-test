import React from 'react';
import { render } from '@testing-library/react';
import { TitleH3 } from './index';

describe('<Title />', () => {
  test('Matches Title child content', () => {
    const { queryByText } = render(
      <TitleH3 value="TitleH3" />
    );
    expect(queryByText(/TitleH3/i)).toBeTruthy();
  });
});
