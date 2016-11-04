import React from 'react'
import TestUtils from 'react-addons-test-utils'
import WaterThing from '../js/components/WaterThing'
const should = require('chai').should()
// import should from 'chai'.should()

describe('WaterThing component', () => {
	it('should render the button and button label', () => {
		const renderer = TestUtils.createRenderer()
		renderer.render(<WaterThing />)
		const result = renderer.getRenderOutput()
		const button = result.props.children

		result.props.className.should.equal('btn')
		result.type.should.equal('div')
		
		button.type.should.equal('button')
		button.props.className.should.be.a('string')
		button.props.should.have.property('onClick')
		button.props.onClick.should.be.a('function')
	})
})



