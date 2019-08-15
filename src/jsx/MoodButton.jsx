// primary imports
import React, {Component} from 'react'

class MoodButton extends Component {
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
			<button>
				<span role='img'>{emoji}</span>
			</button>
		)
	}
}

export default MoodButton
