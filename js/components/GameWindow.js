import React from 'react';
import FeedThing from './FeedThing';
import WaterThing from './WaterThing'
import SkipThing from './SkipThing'
import SlapThing from './SlapThing'
import Reset from './Reset'


const GameWindow = (props) => (
	<div className="interface-box">
		<div>
			<h2 style={{color: 'purple'}} >days: {props.days} / {props.maxDays}</h2>
		</div>
		<div>
			<h2 style={{color: 'teal'}} >points: {props.points}</h2>
		</div>
		<div>
			<h2 style={{color: 'blue'}} >morale: {props.morale}</h2>
		</div>
		<div>
			<h2 style={{color: 'green'}} >health: {props.hp}</h2>
		</div>
	
		{props.days > props.maxDays || props.hp <= 0 ? <Reset onClickReset={props.onClickReset} /> : 
		<div className="button-group">
			<FeedThing onClickFeed={props.onClickFeed} />
			<WaterThing onClickWater={props.onClickWater} />
			<SlapThing onClickSlap={props.onClickSlap} />
			<SkipThing onClickSkip={props.onClickSkip} />
		</div>
		}

	</div>
)


export default GameWindow;
