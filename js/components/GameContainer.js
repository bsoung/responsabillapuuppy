import React from 'react';
import _ from 'lodash';
import GameWindow from './GameWindow';


const GameContainer = React.createClass({

	getInitialState () {
		return {
			points: 0
		}
	},

	onClickFeed () {
		let game = _.cloneDeep(this.state);
		game.points += 2;
		this.setState({
			game:game
		})
	},



	render () {
		console.log(this.state);
		console.log(this.state.points);
		return (
			<GameWindow points={this.state.points} onClickFeed={this.onClickFeed} />
		)
	}


})

module.exports = GameContainer;
