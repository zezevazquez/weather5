require('dotenv');

import axios from 'axios';

const API_KEY = process.env.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// this constant avoids future bugs with reducers if the
// action type changes.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	// designating country code as US, static.
	// 2nd item in query string is country code
	const url = `${ROOT_URL}&q=${city},us`;
	// make Get request with axios
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
