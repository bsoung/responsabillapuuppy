import React from 'react'
import TestUtils from 'react-addons-test-utils'
import GameWindow from '../js/components/GameWindow'
import FeedThing from '../js/components/FeedThing'


const should = require('chai').should()
// import should from 'chai'.should()

describe('GameWindow component', () => {
	let renderer, result, gameWindow

	beforeEach(() => {
		renderer = TestUtils.createRenderer()
		renderer.render(<GameWindow onClickFeed='Feed Me!' 
									onClickWater = 'Drink Me!' 
									onClickSlap = 'Slap Me!'
									onClickSkip = 'Skip Me!'
									days={30}
									points={0}
									morale={100}
									hp={100}
									/>)
		result = renderer.getRenderOutput()
		gameWindow = result.props.children
	})

	it('should have correct interface layout', () => {
		gameWindow[0].props.children.props.children.length.should.equal(4)
		gameWindow[0].props.children.props.children.should.be.an('array')
		gameWindow[0].props.children.props.style.should.be.an('object')
		gameWindow[0].props.children.props.should.have.property('style')

	})

	it('should display correct interface information', () => {
		let days = 30
		let points = 0
		let morale = 100
		let hp = 100

		
		gameWindow[0].props.children.props.children[0].should.equal('days: ')
		gameWindow[0].props.children.props.children[1].should.be.a('number')

		gameWindow[1].props.children.props.children[0].should.equal('points: ')
		gameWindow[1].props.children.props.children[1].should.be.a('number')

		gameWindow[2].props.children.props.children[0].should.equal('morale: ')
		gameWindow[2].props.children.props.children[1].should.be.a('number')

		gameWindow[3].props.children.props.children[0].should.equal('health: ')
		gameWindow[3].props.children.props.children[1].should.be.a('number')

	})

	it('should contain the correct outer div class and children', () => {
		console.log(result.props.children.length)
		result.props.className.should.equal('interface-box')
		result.props.children.length.should.equal(5)
		result.props.children.should.be.an('array')
	})

	/* CHECK THE BUTTON CONTAINERS */
	it('should have correct button group type, content, and length', () => {
		let onClickFeed = 'Feed Me!'
		let onClickWater = 'Drink Me!'
		let onClickSlap = 'Slap Me!'
		let onClickSkip = 'Skip Me!'
		// TODO: let onClickReset = 'Reset Me!'

	

		/* CHECK FOR PASSED CONTAINERS*/
		gameWindow.should.be.an('array')
		gameWindow.length.should.equal(5)
		gameWindow[4].props.children[0].type.name.should.equal('FeedThing')
		gameWindow[4].props.children[1].type.name.should.equal('WaterThing')
		gameWindow[4].props.children[2].type.name.should.equal('SlapThing')
		gameWindow[4].props.children[3].type.name.should.equal('SkipThing')

		/* CHECK EACH CONTAINER'S PROPS */
		gameWindow[4].props.children[0].props.onClickFeed.should.equal('Feed Me!')
		gameWindow[4].props.children[1].props.onClickWater.should.equal('Drink Me!')
		gameWindow[4].props.children[2].props.onClickSlap.should.equal('Slap Me!')
		gameWindow[4].props.children[3].props.onClickSkip.should.equal('Skip Me!')


	})

})

















