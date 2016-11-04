import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Reset from '../js/components/Reset'
const should = require('chai').should()
// import should from 'chai'.should()

describe('Reset component', () => {
	it('should render the button and button label', () => {
		const renderer = TestUtils.createRenderer()
		renderer.render(<Reset />)
		const result = renderer.getRenderOutput()
		const button = result.props.children
		
		result.props.children.props.should.have.property('className')
		result.type.should.equal('div')
		
		button.type.should.equal('button')
		button.props.should.have.property('onClick')
		button.props.onClick.should.be.a('function')
	})
})