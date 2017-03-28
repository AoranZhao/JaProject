import React, {Component} from 'react';
import './MouseEvent.css';

export default class MouseEvent extends Component {

	constructor() {
		super();
		this.state = {
			clicked: false,
			x: 0,
			y: 0,
			d_s_x: 0,
			d_s_y: 0,
			d_e_x: 0,
			d_e_y: 0,
			doing: 'no',
			m_s_x: 0,
			m_s_y: 0,
			m_e_x: 0,
			m_e_y: 0,
			move_dst: 0,
			recent_move_dst: 0
		}
	}

	handleMouseMove(e) {
		var startX = this.state.m_s_x;
		var dst = 0;
		if(this.state.clicked) dst = e.clientX - startX;
		this.setState({
			x: e.clientX,
			y: e.clientY,
			move_dst: dst
		})
	}

	handleDragStart(e) {
		this.setState({
			d_s_x: e.clientX,
			d_s_y: e.clientY
		})
	}

	traggerPage() {
		console.log("Pagging!!");
	}

	handleMouseDown(e) {
		this.setState({
			clicked: true,
			m_s_x: e.clientX,
			m_s_y: e.clientY,
		})
	}

	handleMouseUp(e) {
		var current_move_dst = this.state.move_dst;
		this.setState({
			clicked: false,
			m_e_x: e.clientX,
			m_e_y: e.clientY,
			move_dst: 0,
			recent_move_dst: current_move_dst
		}, () => {
			if(Math.abs(this.state.recent_move_dst) > 200)
				this.traggerPage();
		})
	}

	handleMouseLeave(e) {
		var current_move_dst = this.state.move_dst;
		this.setState({
			clicked: false,
			m_e_x: e.clientX,
			m_e_y: e.clientY,
			move_dst: 0,
			recent_move_dst: current_move_dst
		}, () => {
			if(Math.abs(this.state.recent_move_dst) > 200)
				this.traggerPage();
		})
	}

	render() {
		return(
			<div 
				className="mouse_e" 
				onMouseMove={this.handleMouseMove.bind(this)} 
				onDragStart={this.handleDragStart.bind(this)}
				onMouseDown={this.handleMouseDown.bind(this)}
				onMouseUp={this.handleMouseUp.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				draggable="true">
				<div className="mouse_e_moniter">
					<p>x: {this.state.x}</p>
					<p>y: {this.state.y}</p>
					<p>drag start on: ({this.state.d_s_x}, {this.state.d_s_y})</p>
					<p>drag end on: ({this.state.d_e_x}, {this.state.d_e_y})</p>
					<p>dragging: {this.state.doing}</p>
					<p>click mouse on ({this.state.m_s_x}, {this.state.m_s_y})</p>
					<p>up mouse on ({this.state.m_e_x}, {this.state.m_e_y})</p>
					<p>move in x: {this.state.move_dst}</p>
					<p>recent move dest: {this.state.recent_move_dst}</p>
				</div>
			</div>
			);
	}
}