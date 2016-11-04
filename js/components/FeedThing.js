import React from 'react';

const FeedThing = (props) => (
	// just an element on the page
	<div className="btn">
		<button 
			className="hvr-shrink btn"
			onClick={(e) => {
				e.preventDefault()
				props.onClickFeed()
			}}
		><span>
			feed Mertle flies! <img src="../assets/fly.png" />
		 </span>
		</button>
	</div>
)


export default FeedThing;


