import React from 'react';

const FeedThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: 'red'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickFeed()
			}}
		>
			feed Mertle flies!
		</button>
	</div>
)


module.exports = FeedThing;


