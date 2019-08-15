import React, {Component} from 'react'

class Forecast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			weather: null,
			location: null
		}
	}

	getWeather() {
		// create helper variables
		const secret = process.env.WEATHER_API
		const units = 'Imperial'
		const city = 'San Francisco'
		// construct url
		const url = `https://api.openweathermap.org/data/2.5/`
		+ `weather?q=${city}`
		+ `&appid=${secret}`
		+ `&units=${units}`

		// ensure secret works - (DELETE ME LATER)
		console.warn(secret)

		// hit the url
		fetch(url)
		.then((res) => {
			return res.json()
		})
		.then((json) => {
			return json
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
		return (
			<div className="Forecast">
				<h2>Today's Forecast</h2>
			</div>
		)
	}
}

export default Forecast
