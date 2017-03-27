import React, {Component} from 'react';
import './Second.css';

import ReactScrollableList from 'react-scrollable-list';

export default class Second extends Component {
	constructor() {
		super();
		this.state = {
			msg: [{id: 0, content: 'input some message and send'}]
		}
	}

	handleClick(item) {
		var arr = this.state.msg;
		arr.push({
			id: arr.length,
			content: item
		});
		this.setState({
			msg: arr
		})
	}

	renderMessages() {
		return(
			<div className="msg_list">
				<div className="msg_list_body">
					<ReactScrollableList 
						listItems={this.state.msg}
						heightOfItem={30}
					/>
				</div>
			</div>
			);
	}

	render() {
		return (
			<div className="message">
				{this.renderMessages()}
				<BottomBar handleClick={this.handleClick.bind(this)} />
			</div>
			);
	}
}

class BottomBar extends Component {
	input = '';

	constructor() {
		super();
		this.state = {
		}
	}

	handleChange(e) {
		this.input = e.target.value
	}

	render() {
		return (
			<div className="bottombar">
				<input type="text" onChange={this.handleChange.bind(this)} className="bb_input" />
				<input type="button" value="Send" onClick={() => this.props.handleClick(this.input)} className="bb_submit" />
			</div>
			);
	}
}