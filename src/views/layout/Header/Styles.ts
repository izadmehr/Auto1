import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../utils/theme';

export const HeaderContainer = styled.nav`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HeaderImg = styled.img`
  width: 140px;
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
  color: ${colors.black};
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: ${colors.main};
  }
`;
