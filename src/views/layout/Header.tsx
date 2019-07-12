import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.nav`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Auto1Logo = require('../../assets/images/logo-auto1.png');

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <img src={Auto1Logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </HeaderContainer>
    );
  }
}

export default Header;
