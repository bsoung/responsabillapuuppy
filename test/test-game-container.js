import React from 'react'
import TestUtils from 'react-addons-test-utils'
import GameContainer from '../js/components/GameContainer'


const should = require('chai').should()
// import should from 'chai'.should()

describe('GameContainer component', () => {
	let renderer, result, gameContainer, clickFunction, feedState
	beforeEach(() => {
		renderer = TestUtils.createRenderer()
		renderer.render(<GameContainer
									/>)
		result = renderer.getRenderOutput()
		//console.log(result.props);
		clickFunction = result.props.children[0].props
		feedState = clickFunction.onClickFeed.__reactBoundContext.state
	})

	it('should render the corect containers', () => {
		// console.log(result.props.children[0].type);


		result.props.children[0].type.name.should.equal('GameWindow')
		result.props.children[1].type.name.should.equal('GameImage')
		result.props.children[0].props.days.should.equal(0)
		result.props.children[0].props.maxDays.should.equal(30)
		result.props.children[0].props.hp.should.equal(100)
		result.props.children[0].props.morale.should.equal(100)
		result.props.children[0].props.points.should.equal(0)
		result.props.children.length.should.equal(2)
		result.props.className.should.equal('master-window')
		// console.log(result.props.children[0].props);
		clickFunction.onClickFeed.should.be.a('function')
	})

	it('should pass the correct state', () => {
		feedState.event.should.equal('')
		feedState.event.should.be.a('string')
		feedState.image.should.be.a('string')
		feedState.points.should.be.a('number')
		feedState.days.should.be.a('number')
		feedState.maxDays.should.be.a('number')
		feedState.hp.should.be.a('number')
		feedState.morale.should.be.a('number')
		console.log(clickFunction)

	})
})












