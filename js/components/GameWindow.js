import React from 'react';
import FeedThing from './FeedThing';
import WaterThing from './WaterThing'
import SkipThing from './SkipThing'
import SlapThing from './SlapThing'


const GameWindow = (props) => (
	<div className="interface-box">
		<div>
			<h2>days {props.days} / {props.maxDays}</h2>
		</div>
		<div>
			<h2>points: {props.points}</h2>
		</div>
		<div>
			<h2>morale: {props.morale}</h2>
		</div>
		<div>
			<h2>health: {props.hp}</h2>
		</div>
	
		{props.days > props.maxDays ? <button>Restart!</button> : 
		<div>
			<FeedThing onClickFeed={props.onClickFeed} />
			<WaterThing onClickWater={props.onClickWater} />
			<SlapThing onClickSlap={props.onClickSlap} />
			<SkipThing onClickSkip={props.onClickSkip} />
		</div>
		}

	</div>
)


module.exports = GameWindow;
