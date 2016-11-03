import React from 'react';

const SlapThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: 'red'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickSlap()
			}}
		>
			slap Mertle!
		</button>
	</div>
)


module.exports = SlapThing;