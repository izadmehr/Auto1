import * as React from 'react';
import { render } from 'react-dom';

import AppRouter from './App';
import '../server';

render(<AppRouter />, document.getElementById('root'));
