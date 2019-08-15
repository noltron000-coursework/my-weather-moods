// primary imports
import React, {Component} from 'react'
import '../css/App.css'

// component imports
import Forecast from './Weather.jsx'
import Mood from './Mood.jsx'

class App extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			weatherData: null,
		}
	}
	
	setWeather = (json) => {
		this.setState({weatherData: json})
	}

	setMood = (json) => {
		this.setMood({mood: json})
	}

	render() {
		return (
			<div className="App">
				{/* header bar */}
				<header>
					<h1>My Weather Mood</h1>
				</header>

				{/* weather data */}
				<Forecast 
					weatherData = {this.state.weatherData}
					setWeather = {this.setWeather}
				/>

				{/* mood selection */}
				<Mood
					setMood = {this.setMood}
				/>

			</div>
		)
	}
}

export default App
