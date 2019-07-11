import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Cars } from './views/cars';
import { NoMatch } from './views/404';

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        <Route path="/" exact component={Cars} />
        <Route component={NoMatch} />
      </div>
    </Router>
  );
}
