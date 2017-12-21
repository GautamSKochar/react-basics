import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContactChild from '../components/ContactChild';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });

test('ContactChild Component Should render as expected', () => {
    const component = shallow(<ContactChild />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});