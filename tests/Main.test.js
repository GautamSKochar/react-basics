import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../components/Home';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

configure({ adapter: new Adapter() });

test('Home Component should render', () => {
    const component = shallow(<Home />);
    const tree = toJson(component);
    console.log(tree);
    expect(component.contains(<p>In a new Component!</p>)).toBe(true);
    expect(tree).toMatchSnapshot();
    
    // it('renders without crashing', () => {
    //     const component = shallow(<Home />);
    //     expect (component).toHaveLength(1);
    //     // const div = document.createElement('div');
    //     // ReactDOM.render(<Home />, div);
    //   });
});    