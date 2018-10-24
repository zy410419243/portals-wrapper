/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-10-24 17:14:50
 * @Last Modified by: zy9
 * @Last Modified time: 2018-10-24 19:17:29
 */
import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Ruler from '..';

describe('Ruler', () => {
	it('render correctly', () => {
		const wrapper = mount(<Ruler>test</Ruler>);

		expect(wrapper).toMatchSnapshot();
	});
});