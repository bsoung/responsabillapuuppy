import React from 'react';
import _ from 'lodash';
import GameWindow from './GameWindow';
import GameImage from './GameImage'

const GameContainer = React.createClass({
	getInitialState () {
		return {
			event: '',
			image: 'default.png',
			points: 0,
			days: 0,
			maxDays: 30,
			hp: 100,
			morale: 100
		}
	},

    endDay (e) {

    	let randomEvent = e[Math.floor(Math.random() * e.length)]
    	let coinToss = Math.random()

    	if (coinToss > 0.5) {
    		this.setState({
    			event: randomEvent
    		})
    		
    	} else {
    		this.setState({
    			event: ''
    		})
    	}

    	if (this.state.event === "Your parents don't like your attitude!") {
    		this.setState({
    			maxDays: this.state.maxDays + 1
    		})
    	}

    	if (this.state.event === "One of the flies escapes and flies in your mouth!!!") {
    		this.setState({
    			morale: this.state.morale - 10
    		})
    	}

    	if (this.state.event === "Mertle spits in your face") {
    		this.setState({
    			morale: this.state.morale - 25,
    			hp: this.state.hp - 10
    		})
    	}

    	this.setState({
			days: this.state.days + 1
		})

		if (this.state.days == this.state.maxDays && this.state.points >= this.state.maxDays) {
			this.setState({
				image: 'puppy.png'
			})
		} 

		if (this.state.days == this.state.maxDays && this.state.points < this.state.maxDays) {
			this.setState({
				image: 'mertle_is_fed.png'
			})
		}

	},

	onClickReset () {
		this.setState({
			event: '',
			image: 'default.png',
			points: 0,
			days: 0,
			maxDays: 30,
			hp: 100,
			morale: 100
		})
	},


	onClickFeed () {
		const events = [
			"One of the flies escapes and flies in your mouth!!!",
			"Mertle snaps at your fingers!",
			"Mertle spits in your face"
		]

		this.setState({
			image: 'feed_mertle.png',
			points: this.state.points + 2
		})
		this.endDay(events)

	},

	onClickWater () {
		const events = [
			"One of the flies escapes and flies in your mouth!!!",
			"Mertle snaps at your fingers!",
			"Mertle spits in your face"

		]

		this.setState({
			image: 'water_mertle.png',
			points: this.state.points + 1

		})
		this.endDay(events)
	},

	onClickSkip () {
		const events = [
    		"Your parents don't like your attitude!"
    	]

		this.setState({
			image: 'default.png',
			hp: this.state.hp + 10
			
		})
		this.endDay(events)
	},

	onClickSlap () {
		const events = []

		this.setState({
			image: 'smack_mertle.png',
			morale: this.state.morale + 20,
			points: this.state.points - 1
		})
		this.endDay(events)
	},

	render () {
		return (
			<div>
			<GameWindow days={this.state.days} 
						maxDays={this.state.maxDays}
						hp={this.state.hp}
						morale={this.state.morale}
						points={this.state.points} 
						onClickFeed={this.onClickFeed} 
						onClickWater={this.onClickWater}
						onClickSkip={this.onClickSkip}
						onClickSlap={this.onClickSlap}
						onClickReset={this.onClickReset}
						/>
			<GameImage image={this.state.image} event={this.state.event} />
			</div>
		)
	}

})

module.exports = GameContainer;
