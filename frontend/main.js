'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

import '../sass/css.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from './react/components/home';
import Main from './react/components/main';
import User from './react/components/user';
import Search from './react/components/search';
import Products from './react/components/products/products';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route component={Search}>
				<Route path="user" component={User} />
				<Route path="widgets" component={User} />
			</Route>
			<Route path="products/:id" component={Products} />
		</Route>
	</Router>
), document.getElementById('app'));
