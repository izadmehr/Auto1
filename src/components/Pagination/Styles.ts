import styled, { css, CSSProp, DefaultTheme } from 'styled-components';

import { colors } from '../../utils/theme';

export const Pagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
`;

export const PaginationButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border: none;
  margin: 0 0.5rem;
  font-size: 12px;
  ${({ disabled }: { disabled: boolean }): CSSProp<DefaultTheme> =>
    !disabled
      ? css`
          color: ${colors.main};
          cursor: pointer;
          :hover {
            color: ${colors.mainDark};
            text-decoration: underline;
          }
        `
      : css`
          color: ${colors.darkGray};
        `}
  :focus {
    outline: none;
  }
`;
export const PaginationText = styled.p`
  margin: 0 0.5rem;
  font-size: 12px;
`;
