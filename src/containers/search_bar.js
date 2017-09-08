import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// binding onInputChange to this (which is SearchBar)
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	// preventing unnecessary dom re-rendering
	onFormSubmit(event) {
		event.preventDefault();
		// after this we need to fetch data
		this.props.fetchWeather(this.state.term);
		// clearing the search input
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchWeather }, dispatch);
};

// null because 1st arg is for mapping state to props
// mapping dispatch to props goes in second arg of connect
export default connect(null, mapDispatchToProps)(SearchBar);
