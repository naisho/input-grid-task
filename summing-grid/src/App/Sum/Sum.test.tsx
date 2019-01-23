import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sum from './Sum';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const data = [1, 2, 3];
    const updateData = jest.fn();
    const wrapper = shallow(<Sum data={data} updateData={updateData}/>);
    expect(wrapper).toBeDefined();
});

it('generates four columns', () => {
    const data = [1, 2, 3];
    const updateData = jest.fn();
    const wrapper = shallow(<Sum data={data} updateData={updateData}/>);
    expect(wrapper.find('TextField').length).toBe(4);
});

it('converts sum to magnitude correctly', () => {
    const data = [1, 2, 3];
    const updateData = jest.fn();
    const wrapper = shallow(<Sum data={data} updateData={updateData}/>);
    expect((wrapper.instance() as Sum).numToMagnitude(30)).toBe('30');
    expect((wrapper.instance() as Sum).numToMagnitude(3000)).toBe('3.00k');
    expect((wrapper.instance() as Sum).numToMagnitude(30000000)).toBe('30.0M');
    expect((wrapper.instance() as Sum).numToMagnitude(-30000000)).toBe('-30.0M');
    expect((wrapper.instance() as Sum).numToMagnitude(300000000)).toBe('300M');
    expect((wrapper.instance() as Sum).numToMagnitude(3e+99)).toBe('3.00e+99');
    expect((wrapper.instance() as Sum).numToMagnitude(0.001)).toBe('1.00m');
});