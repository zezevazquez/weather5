import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// DO NOT mutate state, but return new instance of it
			return [action.payload.data, ...state];
		// could also use old school syntax:
		// return state.concat([action.payload.data])
	}
	return state;
}
