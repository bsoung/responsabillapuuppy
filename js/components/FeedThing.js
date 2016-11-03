import React from 'react';

const FeedThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: '#303F9F'}} 
			//
			onClick={(e) => {
				e.preventDefault()
				props.onClickFeed()
			}}
		>
			feed Mertle flies! <img src="../assets/fly.png" />
		</button>
	</div>
)


module.exports = FeedThing;


