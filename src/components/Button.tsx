// A standard button.
import styled from 'styled-components';

import { colors } from '../utils/theme';

export const Button = styled.button`
  width: 128px;
  height: 32px;
  border: none;
  color: ${colors.white};
  background-color: ${colors.main};
  margin-top: 1.5rem;
  float: right;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  :hover {
    background-color: ${colors.mainDark};
  }

  :focus {
    outline: none;
  }
`;
