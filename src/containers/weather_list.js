import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={cityName}>
				<td>{cityName}</td>
				<td>
					<Chart data={temps} color="peru" units="K" />
				</td>
				<td>
					<Chart data={temps} color="red" units="hPa" />
				</td>
				<td>
					<Chart data={pressures} color="limegreen" units="%" />
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
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

const mapStateToProps = ({ weather }) => {
	return { weather };
};

// ES6 instead of writing:
// function mapStateToProps(state) {
//   return { weather: state.weather }
// }

export default connect(mapStateToProps)(WeatherList);
