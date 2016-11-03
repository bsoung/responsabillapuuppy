import React from 'react';
import FeedThing from './FeedThing';

const GameWindow = (props) => (

	<div>
		<div>
			<h2>Points: {props.points}</h2>
		</div>
		<FeedThing onClickFeed={props.onClickFeed} />
	</div>
)


module.exports = GameWindow;
