import React from 'react';

function Mood() {
	return (
		<div className="Mood">
			<h2>Your Mood</h2>
			{/* eslint-disable-next-line */}
			<a href='./'><span role="img">😄</span></a>
			{/* eslint-disable-next-line */}
			<a href='./'><span role="img">😐</span></a>
			{/* eslint-disable-next-line */}
			<a href='./'><span role="img">😭</span></a>
		</div>
	);
}

export default Mood;
