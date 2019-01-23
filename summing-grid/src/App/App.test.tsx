import React from 'react';
import App from './App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
});

it('changes single value in data array', () => {
    const wrapper = shallow(<App />);
    const event: any = {
        target: {
            name: '1',
            value: '99'
        }
    };
    const instance = (wrapper.instance() as App);
    instance.updateData(event);
    instance.forceUpdate();
    expect(instance.state.data[1]).toBe(99);
});

it('replaces state', () => {
    const wrapper = shallow(<App />);
    const newState = [1, 2, 3 , 4];
    const instance = (wrapper.instance() as App);
    instance.changeState(newState);
    instance.forceUpdate();
    expect(instance.state.data).toBe(newState);
});