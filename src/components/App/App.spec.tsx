import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders a title correctly', async () => {
    const { getByTestId } = render(<App />);

    await waitForElement(() => getByTestId('app-title'));

    expect(getByTestId('app-title')).not.toBeNull();
  });
});
