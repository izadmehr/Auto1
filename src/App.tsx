import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Cars } from './views/cars';
import { NoMatch } from './views/404';
import Header from './views/layout/Header';

const Body = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Body>
        <Header />

        <Route path="/" exact component={Cars} />
        <Route component={NoMatch} />
      </Body>
    </Router>
  );
}

export default hot(AppRouter);
