import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

require('./style.scss');

render(
  <Root />,
  document.getElementById('root')
);