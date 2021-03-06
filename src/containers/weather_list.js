import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;
		const farenheit = convertToFarenheit(temps)
		console.log(cityData.list)

		return (
			<tr key={cityName}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={farenheit} color="peru" units="°F" />
				</td>
				<td>
					<Chart data={pressures} color="red" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="limegreen" units="%" />
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

const convertToFarenheit = (dataList) => {
	return dataList.map(data => (data * (9/5) - 459.67))
}

const mapStateToProps = ({ weather }) => {
	return { weather };
};

// ES6 instead of writing:
// function mapStateToProps(state) {
//   return { weather: state.weather }
// }

export default connect(mapStateToProps)(WeatherList);
