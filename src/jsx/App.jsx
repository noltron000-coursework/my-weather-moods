import React from 'react';
import '../css/App.css';
import Forecast from './Forecast.jsx'
import Mood from './Mood.jsx'

function App() {
	return (
		<div className="App">
			<header>
				<h1>My Weather Mood</h1>
			</header>
			<Forecast />
			<Mood />
		</div>
	);
}

export default App;
