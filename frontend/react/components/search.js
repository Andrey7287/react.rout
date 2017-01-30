import React from 'react'

export default class Search extends React.Component {
	render() {
		return (
			 <div className="search">
				<header className="search-header">Search header</header>
				<div className="results">
					{this.props.children}
				</div>
				<div className="search-footer pagination">Search footer</div>
			</div>
		)
	}
}
