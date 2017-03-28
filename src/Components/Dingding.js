import React, {Component} from 'react';
import './Dingding.css';

const panes = [{key: 0, title: 'tab1', color: 'red'}, {key: 1, title: 'tab2', color: 'green'}, {key: 2, title: 'tab3', color: 'blue'}, {key: 3, title: 'tab4', color: 'gray'}];

export default class Dingding extends Component {

	constructor() {
		super();
		this.state = {
			selected: 0
		}
	}

	panes(item, index) {
		return(
			<Panes key={index} index={index} color={item.color} content={item.title} />
			);
	}

	_renderPanes() {
		return(
			<div className="aa_ct_p">
				<div className="aa_ct_panes" style={{transform: `translate(${this.state.selected * 320 * -1}px)`}}>
					{panes.map(this.panes.bind(this))}
				</div>
			</div>
			);
	}

	tabs(item, index) {
		return(
			<Tabs key={index} index={index} title={item.title} handleOnClick={this._handleTabOnClick.bind(this)} />
			);
	}

	_renderTabs() {
		return(
			<div className="aa_ct_t">
				<div className="aa_ct_tabs">
					{panes.map(this.tabs.bind(this))}
				</div>
			</div>
			);
	}

	_handleTabOnClick(index) {
		this.jumpToPane(index);
	}

	nextPane() {
		var currentIndex = this.state.selected;
		if(currentIndex < 3) {
			this.setState({
				selected: ++currentIndex
			});
		}
	}

	prePane() {
		var currentIndex = this.state.selected;
		if(currentIndex > 0) {
			this.setState({
				selected: --currentIndex
			});
		}
	}

	jumpToPane(index) {
		this.setState({
			selected: index
		})
	}

	render() {
		return(
			<div className="aa_dingding">
				{this._renderPanes()}
				{this._renderTabs()}
			</div>
			);
	}
}

class Panes extends Component {
	render() {
		return(
			<div className="aa_panes">
				<p>{this.props.content}</p>
			</div>
			);
	}
}

class Tabs extends Component {
	render() {
		return(
			<div className="aa_tabs">
				<a href="#" onClick={() => this.props.handleOnClick(this.props.index)}>{this.props.title}</a>
			</div>
			);
	}
}