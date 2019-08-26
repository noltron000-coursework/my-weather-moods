import React, {Component} from 'react'

class Forecast extends Component {
	getWeather() {
		// create helper variables
		// const secret = process.env.REACT_APP_WEATHER_API
		const secret = '52da3f67c24e2457198649ad9c443eb9'
		const units = 'Imperial'
		const city = 'San Francisco'
		// construct url
		const url = `https://api.openweathermap.org/data/2.5/`
		+ `weather?q=${city}`
		+ `&appid=${secret}`
		+ `&units=${units}`

		// ensure secret works - (DELETE ME LATER)
		console.warn(secret)
		console.warn(url)

		// hit the url
		fetch(url)
		.then((res) => {
			return res.json()
		})
		.then((json) => {
			// we have the json!
			this.props.setWeather(json)
		})
		.catch((err) => {
			console.error(err.message)
		})
	}

	// must find altrenative for this
	UNSAFE_componentWillMount() {
		this.getWeather()
	}

	render() {
		// declare contents
		let contents
		// no data exists yet
		if (this.props.weatherData === null) {
			contents = (
				<figure className="weather">
					<h2>Today's Weather</h2>
					<p><em>...Loading...</em></p>
				</figure>
			)
		// data exists
		} else {
			contents = (
				<figure className="weather">
					<h2>Today's Weather</h2>
					<p>{this.props.weatherData.weather[0].description}</p>
					<h3>Location</h3>
					<p>{this.props.weatherData.name}</p>
					<h3>Temperature</h3>
					<p>{this.props.weatherData.main.temp}&deg;F</p>
				</figure>
			)
		}
		return contents
	}
}

export default Forecast
