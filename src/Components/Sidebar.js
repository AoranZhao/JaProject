import React, {Component} from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
	displayName = "Sidebar";

	static propTypes = {
		'list': React.PropTypes.array,
		'itemBtnOnClick': React.PropTypes.func
	}

	items(item, index) {
		return (
			<div className="item" key={index}>
				<a onClick={() => this.props.itemBtnOnClick(index)} href="#" className="link" >
					<p>{item}</p>
				</a>
			</div>
			);
	}

	_renderContent() {
		return (
			<div className="sidebar_content">
				{this.props.list.map(this.items.bind(this))}
			</div>
			);
	}

	render() {
		return (
			<div className="sidebar" style={this.props.style}>
				{this._renderContent()}
			</div>
			);
	}
}