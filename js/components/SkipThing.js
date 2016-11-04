import React from 'react';

const SkipThing = (props) => (
	// just an element on the page
	<div className="btn">
		<button 
			className="hvr-shrink btn"
			style={{color: '#303F9F'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onClickSkip()
			}}
		><span>
			skip it - we're too scared!
		 </span>
		</button>
	</div>
)


export default SkipThing;