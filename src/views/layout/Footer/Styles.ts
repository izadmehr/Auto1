import styled from 'styled-components';

import { colors } from '../../../utils/theme';

export const FooterContainer = styled.footer`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-top: 1px solid ${colors.lightGray};
`;

export const FooterText = styled.ul`
  font-size: 14px;
  color: ${colors.darkGray};
`;
