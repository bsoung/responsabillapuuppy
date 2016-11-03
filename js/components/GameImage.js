import React from 'react'

const GameImage = (props) => (
	<div>
		<div className='info-box'>
			<h1>{props.event}</h1>
		</div>
		<div>
			<img src={`../assets/${props.image}`} />
		</div>
	</div>
)

module.exports = GameImage