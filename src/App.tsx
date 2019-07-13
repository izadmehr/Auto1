import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Cars } from './views/cars';
import { NoMatch } from './views/404';
import Header from './views/layout/Header';

const Body = styled.main`
  font-family: 'Roboto', sans-serif;
  margin: -8px;
`;

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Body>
        <Header />
        <Switch>
          <Route path="/" exact component={Cars} />
          <Route component={NoMatch} />
        </Switch>
      </Body>
    </Router>
  );
}

export default hot(AppRouter);
