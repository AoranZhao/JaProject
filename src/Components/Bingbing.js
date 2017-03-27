import React, { Component } from 'react';
import './Bingbing.css';

import Tabs from './Tabs';
import Pane from './Pane';

const toronto_map = {
		center: { lat: 43.7367, lng: -79.4838 },
			zoom: 11,
			markers: [{
				key: 1,
				latlng: {
					latitude: 43.6629,
					longitude: -79.3957
				},
				title: 'UoT',
				description: 'This is University of Toronto St George Campus',
				pinColor: 'red'
			}, {
				key: 2,
				latlng: {
					latitude: 43.7735,
					longitude: -79.5019
				},
				title: 'YU',
				description: 'This is York University',
				pinColor: 'red'
			}, {
				key: 3,
				latlng: {
					latitude: 43.6577,
					longitude: -79.3788
				},
				title: 'RU',
				description: 'This is Ryerson University',
				pinColor: 'red'
			}, {
				key: 4,
				latlng: {
					latitude: 43.7340,
					longitude: -79.5955
				},
				title: 'My home',
				description: 'This is my home',
				pinColor: 'blue'
			}]
	}

const home_map = {
		center: { lat: 36.078820, lng: 120.384194 },
		zoom: 11,
		markers: [{
			key: 1,
			latlng: {
				latitude: 36.078820,
				longitude: 120.384194
			},
			title: 'My Home',
			description: 'This is Qingdao',
			pinColor: 'blue'
		}]
	}

const favoriate_map = {
		center: { lat: 46.207855, lng: 6.147970 },
		zoom: 11,
		markers: [{
			key: 1,
			latlng: {
				latitude: 46.207855,
				longitude: 6.147970
			},
			title: 'Square du Mont-Blanc',
			description: 'This is at Geneva',
			pinColor: 'green'
		}]
	}

const my_map = {
		center: { lat: 43.7340, lng: -79.5955 },
		zoom: 12,
		markers: [{
			key: 1,
			latlng: {
				latitude: 43.7340,
				longitude: -79.5955
			},
			title: 'My home',
			description: 'This is my home',
			pinColor: 'blue'
		}]
	}

export default class Bingbing extends Component {


	render() {
		return (
			<div className="container">
				<Tabs selected={0}>
					<Pane label="首页" iconName="home" text="This is my tab 1 contents!" type="front" data={home_map} />
					<Pane label="备忘录" iconName="list" text="This is my tab 2 contents!" type="third" data={favoriate_map} />
					<Pane label="聊天" iconName="chat" text="This is my tab 3 contents!" type="second" data={toronto_map} />
					<Pane label="推送" iconName="post" text="This is my tab 4 contents!" type="first" data={my_map} />
				</Tabs>
			</div>
			);
	}
}