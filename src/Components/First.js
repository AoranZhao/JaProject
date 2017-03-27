import React, {Component} from 'react';
import './First.css';

import Navicon from 'react-icons/lib/io/navicon-round';
import Sidebar from './Sidebar';

const menuList = ['Emma Watson', 'Robert Deniro', 'Russel Crowe'];
const contentList = [{
	title: 'Emma Watson\'s Post',
	author: 'Emma Watson',
	content: 'Thank you to everybody who went out and saw our film Beauty and the Beast! I saw so many lovely photos of families at the cinema together (here’s a pic of me and my on-screen Dad, the wonderful Kevin Kline) and also so many cute Belle costumes! I hope you all enjoyed it. Love, Em x'
}, {
	title: 'Robert Deniro\'s Post',
	author: 'Robert Deniro',
	content: 'Legend is back!'
}, {
	title: 'Russel Crowe\'s Post',
	author: 'Russel Crowe',
	content: 'Russell as Cable ?? Deadpool 2?? Hmmm'
}]

export default class First extends Component {
	constructor() {
		super();
		this.state = {
			selected: 0
		}
	}

	getInitialState() {
		
	}

	contents(index) {
		return (
			<FirstContent content={contentList[index]} />
			);
	}

	handleItemClick(index) {
		this.setState({selected: index});
	}

	render() {
		return(
			<div className="page">
				<TopBar itemBtnOnClick={this.handleItemClick.bind(this)} />
				{this.contents(this.state.selected)}
			</div>
			);
	}
}

class FirstContent extends Component {
	render() {
		return(
			<div className="page_content">
				<div>
					<h1>{this.props.content.title}</h1>
					<p>{this.props.content.content}</p>
				</div>
			</div>
			);
	}
}

class TopBar extends Component {

	render() {
		return(
			<div style={this.props.style} className="topbar">
				<TopBarButton menuList={menuList} itemBtnOnClick={this.props.itemBtnOnClick} />
				<div className="topbartitle">
					<h1>Posts</h1>
				</div>
			</div>
			);
	}
}

class TopBarButton extends Component {

	static propTypes = {
		menuList: React.PropTypes.array,
		menuBtnOnClick: React.PropTypes.func,
		itemBtnOnClick: React.PropTypes.func
	}

	render() {
		return(
			<div style={this.props.style} className="topbarbutton">
					<a href="#" onClick={this.props.menuBtnOnClick}>
						<Navicon size={60} className="btn_navicon" />
					</a>
					<Sidebar list={this.props.menuList} className="sidebar" itemBtnOnClick={this.props.itemBtnOnClick} />
			</div>
			);
	}
}