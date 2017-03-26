import React, {Component} from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Gmap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
	  	{props.markers.map((marker, index) => (
	  		<Marker 
	  			position={{ lat: marker.latlng.latitude, lng: marker.latlng.longitude }}
	  			key={marker.key}
	  			title={marker.title}
	  		/>
  		))}
  </GoogleMap>
));

export default class Gmap extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
	}

	render() {
		return (
			<div className="map">
				<SimpleMapExampleGoogleMap
			        containerElement={
			          <div style={this.props.style} />
			        }
			        mapElement={
			          <div  style={{ height: `100%`}} />
			        }
			        center={this.props.data.center}
			        zoom={this.props.data.zoom}
			        markers={this.props.data.markers}
			      />
		      </div>
			);
	}
}