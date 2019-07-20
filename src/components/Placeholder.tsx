// A placeholder is used to reserve space for content that soon will appear in a layout.
import React from 'react';
import ContentLoader from 'react-content-loader';

import { colors } from '../utils/theme';

export const Placeholder = (): JSX.Element => (
  <ContentLoader
    height={78}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    style={{
      border: `1px solid ${colors.lightGray}`,
      marginTop: '0.75rem',
      height: '125px',
      width: '280px%'
    }}
  >
    <rect x="9" y="9" rx="0" ry="0" width="60" height="60" />
    <rect x="82" y="14" rx="4" ry="4" width="145" height="10" />
    <rect x="82" y="40" rx="3" ry="3" width="145" height="9" />
    <rect x="82" y="60" rx="0" ry="0" width="83" height="6" />
  </ContentLoader>
);
