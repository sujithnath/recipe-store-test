import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from './index';

describe('<MainLayout />', () => {
  test('Matches mainLayout child content', () => {
    const { queryByText } = render(
      <MainLayout> <span>Main layout</span> </MainLayout>
    );
    expect(queryByText(/Main layout/i)).toBeTruthy();
  });
});
