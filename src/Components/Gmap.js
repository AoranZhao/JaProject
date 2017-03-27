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