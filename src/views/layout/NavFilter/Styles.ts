import styled from 'styled-components';

import { colors } from '../../../utils/theme';

export const NavFiltersContainer = styled.div`
  border: 1px solid ${colors.lightGray};
  display: table;
  margin-right: 1.5rem;
  padding: 1.5rem;
`;

export const FilterButton = styled.button`
  width: 128px;
  height: 32px;
  border: none;
  color: ${colors.white};
  background-color: ${colors.main};
  margin-top: 1.5rem;
  float: right;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  :hover {
    background-color: ${colors.mainDark};
  }

  :focus {
    outline: none;
  }
`;
