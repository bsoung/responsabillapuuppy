import React from 'react';

const SlapThing = (props) => (
	// just an element on the page
	<div className="btn">
		<button 
			className="hvr-shrink btn"
			style={{color: '#FF5722'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickSlap()
			}}
		><span style={{paddingLeft: '10px'}}>
			slap Mertle! <img src="../assets/slap.png" />
		 </span>
		</button>
	</div>
)


module.exports = SlapThing;