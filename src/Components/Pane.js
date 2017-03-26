import React, { Component } from 'react';

import './Pane.css';
import Gmap from './Gmap';

export default class Pane extends Component {
	displayName = 'Pane';
	propTypes = {
		label: React.PropTypes.string.isRequired,
		iconName: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		children: React.PropTypes.element.isRequired
	}

	render() {
		switch(this.props.type) {
			case "map": return (
				<div style={this.props.style} className="pane">
					<Gmap style={{height: `100%`}} data={this.props.data} />
					<div style={{height: `10%`}}>
						<p style={{textAlign: `center`, display: `block`, marginTop: `20px`, userSelect: `none`}}>Drag left or right to change tab, or click button</p>
					</div>
				</div>
				);
			default: return (
				<div style={this.props.style} className="pane">
					<div>
						<p>{this.props.text}</p>
					</div>
				</div>
				);
		}
	}
}