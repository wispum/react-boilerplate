import App from '../src/components/App'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
	test('should match snapshot', () => {
		const wrapper = shallow(<App/>)
		expected(wrapper.find('h1').text()).toBe('hello there')
		expected(wrapper).toMatchSnapshot
	})
})