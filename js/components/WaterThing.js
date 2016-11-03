import React from 'react';

const WaterThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: 'blue'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickWater()
			}}
		>
			water Mertle <img src="../assets/raindrop.png" />
		</button>
	</div>
)


module.exports = WaterThing;
