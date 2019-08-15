// primary imports
import React, {Component} from 'react'

class MoodButton extends Component {
	postMood(event) {
		const now = Date.now()
		const mood = parseInt(this.props.mood)
		// Add mood with timestamp to database.
		console.log(now, mood)
	}

	render() {
		const mood_emojis = {
			'2':  '😊',
			'1':  '🙂',
			'0':  '😐',
			'-1': '🙁',
			'-2': '😰',
		}

		const emoji = mood_emojis[this.props.mood]

		return (
			<button onClick={(e) => {
				this.postMood()
				e.preventDefault()
			}}>
				<span role='img'>{emoji}</span>
			</button>
		)
	}
}

export default MoodButton
