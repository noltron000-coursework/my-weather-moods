import React, {Component} from 'react'

class Forecast extends Component {
	getWeather() {
		// create helper variables
		const secret = process.env.REACT_APP_WEATHER_API
		// const secret =
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
		console.log('weather data:', this.props.weatherData)
		if (this.props.weatherData === null) {
			return(
				<div className="weather">
					<h2>Today's Weather</h2>
					<p><em>...Loading...</em></p>
				</div>
			)
		} else {
			return (
				<div className="weather">
					<h2>Today's Weather</h2>
					<p>SEE:</p>
					<p>{this.props.weatherData.name}</p>
					<p>{this.props.weatherData.main.temp}</p>
					<p>{this.props.weatherData.weather[0].description}</p>
				</div>
			)
		}
	}
}

export default Forecast
