import React, {Component} from 'react';
import './Tabs.css';

import IoHome from 'react-icons/lib/io/home';
import IoHeart from 'react-icons/lib/io/heart';
import IoMap from 'react-icons/lib/io/map';
import IoPerson from 'react-icons/lib/io/person';

import IoList from 'react-icons/lib/io/ios-list';
import IoChat from 'react-icons/lib/io/chatboxes';
import IoPost from 'react-icons/lib/io/document-text';

import Slider from 'react-motion-slider';

export default class Tabs extends Component {
	displayName = 'Tabs';
	slider = null;
	slide = null;

	static propTypes = {
	    selected: React.PropTypes.number,
	    children: React.PropTypes.oneOfType([
	      React.PropTypes.array,
	      React.PropTypes.element
	    ]).isRequired,
	  };

	constructor(props) {
		super(props);
		this.slider = null;
		this.state = this.getInitialState();
	}

	// getDefaultProps() {
		// return {
		// 	selected: 0,
		// };
	// }

	getInitialState() {
		return {
			selected: this.props.selected
		};
	}

	moveSlide(num) {
		if(num > 0) {
			this.slide.next();
		} else if(num < 0) {
			this.slide.prev();
		}
		this.setState({gap: 1});
	}

	handleClick(index, event) {
		let gap = index - this.state.selected;
		event.preventDefault();
		this.setState({
			selected: index,
			gap: Math.abs(gap)
		}, function() { this.moveSlide(gap); });
	}

	_getIcon(iconName, size) {
		switch (iconName) {
			case 'home': return (<IoHome size={size} className="icon" />);
			case 'heart': return (<IoHeart size={size} className="icon" />);
			case 'map': return (<IoMap size={size} className="icon" />);
			case 'person': return (<IoPerson size={size} className="icon" />);
			case 'list': return (<IoList size={size} className="icon" />);
			case 'chat': return (<IoChat size={size} className="icon" />);
			case 'post': return (<IoPost size={size} className="icon" />);
			default:
				return (<IoHome size={size} className="icon" />);
		}
	}

	labels(child, index) {
		let classes = "tabs_label_title";
		classes += (this.state.selected === index) ? ' label_active' : '';
		// let activeClass = (this.state.selected === index ? 'active' : '');
		return (
			<il key={index} className="tabs_label">
				<a href="#" 
					className={classes}
					onClick={this.handleClick.bind(this, index)}>
					<div>
						<p>{child.props.label}</p>
						{this._getIcon(child.props.iconName, 40)}
					</div>
				</a>
			</il>
			);
	}

	_renderTitles() {
		return (
			<ul className="tabs_labels">
				{this.props.children.map(this.labels.bind(this))}
			</ul>
			);
	}

	pages(child, index) {
		return (
			<div key={index} className="tabs_page">
				{child}
			</div>
			);
	}

	_renderContent() {
		return (
				<div className="tabs_content" ref={(e) => { this.slider = e; }}>
					<Slider ref={(e) => { this.slide = e; }} slidesToMove={this.state.gap} afterSlide={currentIndex => {this.setState({selected: currentIndex[0]})}}>
						{this.props.children.map(this.pages.bind(this))}
					</Slider>
				</div> 
			);
	}

	render() {
		return (
			<div className="tabs">
				{this._renderContent()}
				{this._renderTitles()}
			</div>
			);
	}
}