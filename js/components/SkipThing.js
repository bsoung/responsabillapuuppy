import React from 'react';

const SkipThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: 'purple'}} 
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