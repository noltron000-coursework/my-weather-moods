// primary imports
import React, {Component} from 'react'

// component imports
import MoodButton from './MoodButton.jsx'

class Mood extends Component {
	render() {
		return (
			<div className="Mood">
				<h2>Your Mood Today</h2>
				<MoodButton mood={-2} />
				<MoodButton mood={-1} />
				<MoodButton mood={ 0} />
				<MoodButton mood={ 1} />
				<MoodButton mood={ 2} />
			</div>
		)
	}
}

export default Mood
