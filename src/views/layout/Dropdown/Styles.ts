import styled from 'styled-components';

import { colors } from '../../../utils/theme';

export const DropdownTitle = styled.p`
  font-size: 12px;
`;
export const MenuContainer = styled.div`
  position: relative;
  width: 300px;
`;

export const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  border: 1px solid ${colors.lightGray};
  font-size: 12px;
  :focus {
    outline: none;
  }
`;
export const DropDownItems = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 0.57rem;
  border: 1px solid ${colors.lightGray};
  z-index: 1;
  :last-child {
    border-bottom: none;
  }
`;
export const DropdownItem = styled.button`
  width: 100%;
  height: 32px;
  text-align: left;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid ${colors.lightGray};

  :hover {
    background-color: ${colors.mainDark};
    color: ${colors.white};
  }

  :focus {
    outline: none;
  }
`;
