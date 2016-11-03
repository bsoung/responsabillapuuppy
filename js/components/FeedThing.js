import React from 'react';

const FeedThing = (props) => (
	// just an element on the page
	<div>
		<a href="#" onClick{(e) => {
			e.preventDefault();
			props.onClickFeed();
		}}>Feed Mertle Flies </a>
	</div>
)


module.exports = FeedThing;


