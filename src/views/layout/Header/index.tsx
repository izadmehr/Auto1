import React from 'react';

import { HeaderContainer, Logo, HeaderLink, HeaderRight } from './Styles';

const Auto1Logo = require('../../../assets/images/logo-auto1.png');

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <Logo src={Auto1Logo} alt="Auto1 logo" />
      </HeaderLink>
      <HeaderRight>
        <li>
          <HeaderLink to="/">Cars</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/my-orders/">My Orders</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/sell/">Sell</HeaderLink>
        </li>
      </HeaderRight>
    </HeaderContainer>
  );
}
