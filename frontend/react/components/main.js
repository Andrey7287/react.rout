import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {

	render() {
		return (
			<div className="app">
				<header className="primary-header">Header</header>
				<aside className="primary-aside">Aside</aside>
				<ul>
					<li><Link activeClassName="act" onlyActiveOnIndex={true} to="/">Home</Link></li>
					<li><Link activeClassName="act" to="user">user</Link></li>
					<li><Link activeClassName="act" to="products">products</Link></li>
				</ul>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}

}
