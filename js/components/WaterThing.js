import React from 'react';

const WaterThing = (props) => (
	// just an element on the page
	<div className="btn">
		<button 
			className="hvr-shrink btn"
			style={{color: '#303F9F'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickWater()
			}}
		><span>
			water Mertle <img src="../assets/raindrop.png" />
		 </span>
		</button>
	</div>
)


export default WaterThing;
