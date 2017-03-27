import React, {Component} from 'react';
import './Front.css';

import Pointer from 'react-icons/lib/io/chevron-down'

const intrs = [{
	title: 'Todo页面',
	desc: 'Todo页面是用来记录准备要做的事，属于备忘录一类。点击右上角的＋按钮打开添加备忘录页面，再次点击关闭，点击每一项右上角的小x以删除本项备忘录'
}, {
	title: 'Chat页面',
	desc: 'Chat页面是给朋友发送消息的页面，属于社交一类。 在输入框输入消息，点击send将内容发送到聊天区'
}, {
	title: 'Post页面',
	desc: 'Post页面是用来获取名人的社交状态，属于娱乐一类。 点击左上角的按钮选择相应的名人'
}];

export default class Front extends Component {
	renderContent(item, index) {
		return(
			<FrontItem key={index} item={item} />
			);
	}

	render() {
		return(
			<div className="front">
				<div className="front_title">
					<p>Introduction</p>
				</div>
				<div style={{padding: `20px`}}>
					<p>这是一个介绍页面， 点击每一项右边的箭头以阅读详细信息</p>
				</div>
				<div className="front_content">
					{intrs.map(this.renderContent)}
				</div>
			</div>
			);
	}
}

class FrontItem extends Component {
	constructor() {
		super();
		this.state = {
			active: false
		};
	}

	handleClick() {
		var a = this.state.active;
		this.setState({
			active: !a
		})
	}

	render() {
		return(
			<div className="front_content_item">
				<div className="front_item_title">
					<p>{this.props.item.title}</p>
					<a href="#" onClick={this.handleClick.bind(this)} className={this.state.active? "front_item_title_btn front_item_title_btn_show" : "front_item_title_btn front_item_title_btn_hidden"}>
						<Pointer size={20} />
					</a>
				</div>
				<div className={this.state.active? "front_item_content front_item_content_show" : "front_item_content front_item_content_hidden"}>
					<p>{this.props.item.desc}</p>
				</div>
			</div>
			);
	}
}