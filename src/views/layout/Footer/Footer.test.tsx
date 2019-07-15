// ETA: 30 minutes
import { render } from '@testing-library/react';
import * as React from 'react';

import { Footer } from './index';

describe('<Footer />', () => {

  it('should render "©Auto1 Group 2019"', (): void => {
    const { getByText } = render(<Footer />);

    expect(getByText('©Auto1 Group 2019')).toBeDefined();
  });
});
