import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('<Header />', () => {
  test('Matches header content', () => {
    const { queryByText } = render(
      <Header />
    );
    expect(queryByText(/Marley Spoon/i)).toBeTruthy();
  });
});
