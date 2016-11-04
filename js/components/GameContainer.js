import React from 'react';
import _ from 'lodash';
import GameWindow from './GameWindow';
import GameImage from './GameImage'

const GameContainer = React.createClass({
	getInitialState () {
		return {
			mirtleAnger: 0,
			status: 'Mirtle seems to be fairly tame at the moment',
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

    		let event_ = randomEvent.display;
    		let payload = {days: this.state.days + 1};

    		/* FEEDING RANDOM EVENTS */

    		if (event_ == "One of the flies escapes and charges into your mouth!"){
    			payload['event'] = event_;
    			payload['image'] = randomEvent.image;
    			payload['morale'] = this.state.morale - 10
    			payload['hp'] = this.state.hp - 10
    			
    		}

    		if (event_ == "Mertle spits in your face with enormous force!"){
    			payload['event'] = event_;
    			payload['image'] = randomEvent.image;
    			payload['morale'] = this.state.morale - 15
    			payload['hp'] = this.state.hp - 25
    			
    		}

    		if (event_ == "Mertle snaps at your fingers, saliva drooling from its mouth."){
    			payload['event'] = event_;
    			payload['image'] = randomEvent.image;
    			payload['morale'] = this.state.morale - 5
    			payload['hp'] = this.state.hp - 15
    		
    		}

    		/* WATER RANDOM EVENTS */

    		if (event_ == "Mertle is in a bad mood today, and does not accept any water."){
				payload['event'] = event_;
				payload['image'] = randomEvent.image;
				payload['hp'] = this.state.hp + 15

    		}

    		if (event_ == "Mertle spits out the water in disgust!"){
				payload['event'] = event_;
				payload['image'] = randomEvent.image;
				payload['morale'] = this.state.morale - 10
				payload['hp'] = this.state.hp - 5

    		}

    		if (event_ == "Mertle knocks you out and steals your pocket money."){
				payload['event'] = event_;
				payload['image'] = randomEvent.image;
				payload['morale'] = this.state.morale - 15
				payload['hp'] = this.state.hp - 15

    		}

    		this.setState(payload);
    		
    	} else {
    		this.setState({
    			days: this.state.days + 1
    		})
    	}

    	if (this.state.morale <= 0) {
    		this.setState({
    			maxDays: this.state.maxDays + 10,
    			points: this.state.points - 30,
    			morale: 50
    		})
    	}
    	

		if (this.state.days == this.state.maxDays && this.state.points >= this.state.maxDays) {
			this.setState({
				image: 'puppy.png',
				event: 'You get a puppy!!!'
			})
		} 

		if (this.state.days == this.state.maxDays && this.state.points < this.state.maxDays) {
			this.setState({
				image: 'mertle_is_fed.png',
				event: 'Mertle\'s having a big dinner tonight.'
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
			{display: "One of the flies escapes and charges into your mouth!", image: 'fly_in_mouth.png'},
			{display: "Mertle spits in your face with enormous force!", image: 'trap_attack.jpeg'},
			{display: "Mertle snaps at your fingers, saliva drooling from its mouth.", image: 'biting_hand.jpeg'}
			
		]

		this.setState({
			image: 'feed_mertle.png',
			points: this.state.points + 2,
			morale: this.state.morale + 3,
			hp: this.state.hp + 3,
			event: 'You manage to throw a fly into mertle\'s mouth.'
		})
		this.endDay(events)


	},

	onClickWater () {
		const events = [
			{display: "Mertle is in a bad mood today, and does not accept any water.", image: 'rage_face.jpg'},
			{display: "Mertle spits out the water in disgust!", image: 'spit_out.png'},
			{display: "Mertle knocks you out and steals your pocket money.", image: 'bully_trap.jpeg'},

		]

		this.setState({
			image: 'water_mertle.png',
			points: this.state.points + 1,
			morale: this.state.morale + 2,
			hp: this.state.hp + 2,
			event: 'You skillfully water mirtle!'

		})
		this.endDay(events)
	},

	onClickSkip () {
		const events = [
    		{display: "Your parents don't like your attitude.", image: 'angry_parents.png'},
    	]

		this.setState({
			image: 'angry_parents.png',
			hp: this.state.hp + 30,
			maxDays: this.state.maxDays + 1,
			event: "Your parents don't like your attitude."
			
		})
		this.endDay(events)
	},

	onClickSlap () {
		const events = []

		this.setState({
			image: 'smack_mertle.png',
			morale: this.state.morale + 15,
			points: this.state.points - 1,
			event: "You smack mirtle silly! You gain morale!"
		})
		this.endDay(events)
	},

	render () {
		{this.state.points >= 0 ? this.state.points = this.state.points : this.state.points = 0}
		{this.state.hp <= 100 ? this.state.hp = this.state.hp : this.state.hp = 100}
		{this.state.morale <= 100 ? this.state.morale = this.state.morale : this.state.morale = 100}
		return (
			<div className='master-window'>
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
				<GameImage image={this.state.image} event={this.state.event} status={this.state.status} />
			</div>
		)
	}

})

export default GameContainer;
