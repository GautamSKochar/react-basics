import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import User from '../components/User';
import TodoList from '../components/TodoList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });

test('User Component Should render as expected', () => {
    const component = shallow(<User name="aaaabbbccc" />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});

describe('User Todo List', () => {
    let list;
    beforeEach(() => {
        list = shallow(<TodoList items={['Name 1', 'Name 2', 'Name 3']} />);
    });

    it('List renders ul', () => {
        console.log("List renders ul element");
        expect(list.find('ul').length).toEqual(1);
    });

    it('List renders li elements', () => {
        expect(list.find('li').length).toEqual(3);
        console.log("List renders li elements");
    });

});