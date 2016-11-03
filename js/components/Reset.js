import React from 'react';

const Reset = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: 'orange'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickReset()
			}}
		>
			Play Again?
		</button>
	</div>
)


module.exports = Reset;