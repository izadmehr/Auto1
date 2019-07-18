import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../utils/theme';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Logo = styled.img`
  width: 140px;
  margin-left: 1.5rem;
`;
const Auto1Logo = require('../assets/images/logo-auto1.png');

const H1 = styled.h1`
  font-size: 32px;
  color: ${colors.darkGray};
`;

const Text = styled.p`
  font-size: 16px;
  color: ${colors.darkGray};
`;
const HomePageLink = styled(Link)`
  font-size: 16px;
  color: ${colors.main};
  text-decoration: none;
  margin-left: 4px;
  :hover {
    color: ${colors.mainDark};
    text-decoration: underline;
  }
`;
export function NoMatch(): JSX.Element {
  return (
    <Container>
      <Logo src={Auto1Logo} alt="Auto1 logo" />
      <H1>404 - Not Found</H1>
      <Text>Sorry, the page you are looking for does not exist</Text>
      <Text>
        You can always go back to the
        <HomePageLink to="/">homepage</HomePageLink>
      </Text>
    </Container>
  );
}
