import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../utils/theme';

export const RowContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${colors.lightGray};
  margin-top: 0.75rem;
  padding: 0.75rem;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
`;

export const RowRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-left: 1.5rem;
`;

export const RowTitle = styled.a`
  color: ${colors.darkGray};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: ${colors.main};
  }
`;

export const CarDetails = styled.p`
  color: ${colors.darkGray};
  font-size: 12px;
`;
export const ViewDetails = styled(Link)`
  color: ${colors.main};
  font-size: 12px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: ${colors.mainDark};
  }
`;
