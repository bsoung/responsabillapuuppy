import React from 'react'

const GameImage = (props) => (
	<div>
		<div className='info-box'>
			<p>{props.event}</p>
		</div>
		<div className='image-box'>
			<img src={`../assets/${props.image}`} />
		</div>
		<div className="status-box">
			<p>{props.status}</p>
		</div>
	</div>
)

export default GameImage