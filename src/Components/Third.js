import React, {Component} from 'react';
import './Third.css';

import Plus from 'react-icons/lib/io/plus-round';
import Close from 'react-icons/lib/io/close-round';

export default class Third extends Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					todo: 'car wash',
					desc: 'go to esso to wash my car'
				}
			]
		};
	}

	handleAddClick(todo, desc) {
		var arr = this.state.todos;
		arr.push({
			todo: todo,
			desc: desc
		});
		this.setState({
			todos: arr
		})
	} 

	handleDelClick(index) {
		var arr = this.state.todos;
		if (index > -1) {
			arr.splice(index, 1);
		}
		this.setState({
			todos: arr
		})
		// console.log(index);
	}

	render() {
		return(
			<div className="third">
				<ThirdTopBar handleAddClick={this.handleAddClick.bind(this)} />
				<ThirdContent contents={this.state.todos} handleDelClick={this.handleDelClick.bind(this)} />
			</div>
			);
	}
}

class ThirdContent extends Component {
	renderItem(item, index) {
		return(
			<ThirdContentItem content={item} key={index} index={index} handleDelClick={this.props.handleDelClick} />
			);
	}

	render() {
		return(
			<div className="thirdcontent">
				{this.props.contents.map(this.renderItem.bind(this))}
			</div>
			);
	}
}

class ThirdContentItem extends Component {
	render() {
		return(
			<div className="thirdcontentitem">
				<div className="thirdcontItem_title">
					<p>{this.props.content.todo}</p>
					<a href="#" onClick={() => this.props.handleDelClick(this.props.index)} className="todoitem_btn">
						<Close />
					</a>
				</div>
				<div className="thirdcontItem_content">
					<p>{this.props.content.desc}</p>
				</div>
			</div>
			);
	}
}

class ThirdTopBar extends Component {
	todo = '';
	desc = '';

	constructor() {
		super();
		this.state = {
			adder_active: false
		}
	}

	handleOnClick() {
		var check = this.state.adder_active;
		this.setState({
			adder_active: !check
		})
	}

	handleTodoChange(e) {
		this.todo = e.target.value;
	}

	handleDescChange(e) {
		this.desc = e.target.value;
	}

	render() {
		return(
			<div className="thirdtopbar">
				<p>Todo List</p>
				<div className="todo_addbtn">
					<a href="#" onClick={this.handleOnClick.bind(this)}>
						<Plus size={50} className={this.state.adder_active? "icon_plus" : "icon_plus_hidden"} />
					</a>
					<div className={this.state.adder_active? "todoadder todoadder_show" : "todoadder todoadder_hidden"}>
						<div className="adder_form">
							<div>
								<p>Todo</p>
								<input type="text" onChange={this.handleTodoChange.bind(this)} className="adder_form_ctl" />
							</div>
							<div>
								<p>Description</p>
								<input type="text" onChange={this.handleDescChange.bind(this)} className="adder_form_ctl" />
							</div>
							<input type="submit" value="save" onClick={() => this.props.handleAddClick(this.todo, this.desc)} className="todoadder_submit"/>
						</div>
					</div>
				</div>
			</div>
			);
	}
}