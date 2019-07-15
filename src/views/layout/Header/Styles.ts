import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../utils/theme';

export const HeaderContainer = styled.nav`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: white;
  border-bottom: 1px solid ${colors.lightGray};
`;

export const Logo = styled.img`
  width: 140px;
  margin-left: 1.5rem;
`;

export const HeaderRight = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  li {
    margin-right: 1.5rem;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${colors.darkGray};
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: ${colors.main};
  }
`;
