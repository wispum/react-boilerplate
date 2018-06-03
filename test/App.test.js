import App from '../src/components/App'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
	test('should match phrase in h1-tag', () => {
		const wrapper = shallow(<App />)

		expect(wrapper.find('h1').text()).toBe('hello there')
		expect(wrapper).toMatchSnapshot
	})
})