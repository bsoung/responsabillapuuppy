import React from 'react';

const SlapThing = (props) => (
	// just an element on the page
	<div>
		<button 
			className="hvr-shrink"
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