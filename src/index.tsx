import * as React from 'react';
import { render } from 'react-dom';
import { Cars } from './views/cars';
import '../server';

render(<Cars />, document.getElementById("root"));
