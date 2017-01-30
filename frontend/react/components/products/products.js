import React from 'react'
import List1 from './list1';
import List2 from './list2';
import List3 from './list3';

export default class Products extends React.Component {

	constructor(){
		super();
	}

	render() {
		var template;
		switch (this.props.params.id) {
			case ':1':
				template = <List1 />
				break;
			case ':2':
				template = <List2 />
				break;
			case ':3':
				template = <List3 />
		}

		return (
			<div>
				<h2>Product list</h2>
				{template}
			</div>
		)
	}
}
