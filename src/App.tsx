import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Cars } from './views/cars';
import { NoMatch } from './views/404';
import { Header } from './views/layout/Header';
import { Footer } from './views/layout/Footer';
import { Show } from './views/Show';
import {MyOrders} from "./views/MyOrders";

const Body = styled.main`
  font-family: 'Roboto', sans-serif;
  min-height: 100%;
  margin: -8px -8px -80px;
`;
const PushFooter = styled.div`
  height: 80px;
`;
const GlobalStyle = createGlobalStyle`
  html, body {
  height: 100%;
  margin: 0;
}
#root{
 height: 100%;
}
`;

function AppRouter(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Header />
        <Switch>
          <Route path="/" exact component={Cars} />
          <Route path="/my-orders/" exact component={MyOrders} />
          <Route path="/car/:id" exact component={Show} />
          <Route component={NoMatch} />
        </Switch>
        <PushFooter />
      </Body>
      <Footer />
    </>
  );
}

export default hot(AppRouter);
