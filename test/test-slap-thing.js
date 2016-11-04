import React from 'react'
import TestUtils from 'react-addons-test-utils'
import SlapThing from '../js/components/SlapThing'
const should = require('chai').should()
// import should from 'chai'.should()

describe('SlapThing component', () => {
	it('should render the button and button label', () => {
		const renderer = TestUtils.createRenderer()
		renderer.render(<SlapThing />)
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