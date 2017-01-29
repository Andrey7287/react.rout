'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

import '../sass/css.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';
import Hello from './react/components/hello';
import User from './react/components/user';

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={Hello} />
    <Route path="/user" component={User} />
  </Router>
), document.getElementById('app'));
