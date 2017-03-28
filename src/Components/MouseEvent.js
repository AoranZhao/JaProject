import React, {Component} from 'react';
import './MouseEvent.css';

export default class MouseEvent extends Component {

	trag = "Not Pagging..."
	len_tl = 0;
	len_ttl = 0;
	len_ctl = 0;

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
			recent_move_dst: 0,
			t_s_x: 0,
			t_s_y: 0
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
		if(Math.abs(this.state.recent_move_dst) > 200) {
			console.log("Pagging!!");
			this.trag = "Pagging!!";
		} else {
			console.log("Not Pagging...");
			this.trag = "Not Pagging...";
		}
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
			this.traggerPage();
		})
	}

	handleTouchStart(e) {
		this.len_tl = e.touches.length;
		this.len_ttl = e.targetTouches.length;
		this.len_ctl = e.changedTouches.length;

		this.setState({
			t_s_x: e.touches[0].clientX,
			t_s_y: e.touches[0].clientY
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
				draggable="true"
				// onTouchMove={this.handleMouseMove.bind(this)}
				onTouchStart={this.handleTouchStart.bind(this)}
				// on
				>
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
					<p>{this.trag}</p>
					<p>touch start on: ({this.state.t_s_x}, {this.state.t_s_y})</p>
					<p>len tl: {this.len_tl}</p>
					<p>len ttl: {this.len_ttl}</p>
					<p>len ctl: {this.len_ctl}</p>
					<p>window.innerHeight {window.innerHeight}</p>
					<p>window.innerWidth {window.innerWidth}</p>
				</div>
			</div>
			);
	}
}