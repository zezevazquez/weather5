import React, { Component } from 'react';

export default class GoogleMap extends Component {
	//lifecycle method gets called when this component is rendered to the screen

	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				//diff between lng and long is because weather api uses lon for longitude
				lng: this.props.lon
			}
		});
	}

	render() {
		// ref system in react gives us direct reference to the div
		// we get a direct reference to the html element rendered on the screen
		// ie this.refs.map anywhere ont he page gives us access to this element
		// ie look at componentDidMount
		return <div ref="map" />;
	}
}
