import { hot } from "react-hot-loader/root";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Cars } from './views/cars';
import { NoMatch } from './views/404';
import Header from './views/layout/Header';

 function AppRouter(): JSX.Element {
  return (
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={Cars} />
        <Route component={NoMatch} />
      </div>
    </Router>
  );
}

export default hot(AppRouter);