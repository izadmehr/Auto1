// ETA: 1 Hour
import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './index';

describe('<Header />', (): void => {
  it('should render <Logo />', () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByAltText('Auto1 logo')).toBeDefined();
  });

  it('should render Links', (): void => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText('Cars')).toBeDefined();
    expect(getByText('Sell')).toBeDefined();
    expect(getByText('My Orders')).toBeDefined();
  });
});
