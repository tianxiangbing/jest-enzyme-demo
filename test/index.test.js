const sum = require('./sum');
import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/index';
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
const setup = ({ ...props }) => {
    const wrapper = shallow(<App {...props} />);
    return {
        props,
        wrapper,
    };
};
describe('Test App', () => {
    it('Test App"', () => {
        const app = shallow(<App />);
        expect(app.find('.hello').text()).toEqual('123');
    });
    it('react APP', () => {
        const { wrapper } = setup({ count: 3 });
        expect(wrapper.find('b').text()).toEqual("3");
        wrapper.setState({ 'count': 99 });//改state
        expect(wrapper.find('s').text()).toEqual("99");
        //模拟事件
        wrapper.find('button').simulate('click');
        expect(wrapper.find('s').text()).toEqual("100");
    })
});