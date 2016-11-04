import React from 'react';

const WaterThing = (props) => (
	// just an element on the page
	<div>
		<button 
			style={{color: '#303F9F'}} 
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
