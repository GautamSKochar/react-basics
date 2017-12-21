import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { Header } from '../components/Header';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

configure({ adapter: new Adapter() });

test('Header Component Snapshot Test', () => {
    const component = shallow(<Header />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});    