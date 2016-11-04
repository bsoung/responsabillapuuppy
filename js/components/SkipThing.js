import React from 'react';

const SkipThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: '#303F9F'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickSkip()
			}}
		>
			skip it - we're too scared!
		</button>
	</div>
)


module.exports = SkipThing;