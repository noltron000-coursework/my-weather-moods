// primary imports
import React, {Component} from 'react'

// component imports
import MoodButton from './MoodButton.jsx'

class Mood extends Component {
	render() {
		return (
			<figure className='Mood'>
				<h2>Your Mood Today</h2>
				<div className='ButtonGroup'>
					<MoodButton mood={ 2} />
					<MoodButton mood={ 1} />
					<MoodButton mood={ 0} />
					<MoodButton mood={-1} />
					<MoodButton mood={-2} />
				</div>
			</figure>
		)
	}
}

export default Mood
