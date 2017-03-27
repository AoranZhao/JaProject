import React, { Component } from 'react';

import './Pane.css';
import Gmap from './Gmap';
import First from './First';
import Second from './Second';
import Third from './Third';
import Front from './Front';

export default class Pane extends Component {
	displayName = 'Pane';
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		iconName: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		children: React.PropTypes.element
	}

	/*
						<div style={{height: `10%`}}>
						<p style={{textAlign: `center`, display: `block`, marginTop: `20px`, userSelect: `none`}}>Drag left or right to change tab, or click button</p>
					</div>
	*/
	render() {
		switch(this.props.type) {
			case "first": return (
				<div className="pane">
						<First />
				</div>
			);
			case "second": return (
				<div className="pane">
					<Second />
				</div>
				);
			case "third": return (
				<div className="pane">
						<Third />
				</div>
				);
			case "front": return (
				<div className="pane">
					<Front />
				</div>
				);
			case "map": return (
				<div className="pane">
					<Gmap style={{height: `100%`}} data={this.props.data} />
				</div>
				);
			default: return (
				<div className="pane">
						<First />
				</div>
				);
		}
	}
}