import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Board from '../components/Board';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });

test('Board Component Should render as expected', () => {
    const component = shallow(<Board />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    //const wrapper1 = mount(<Board />);
    //wrapper1.find('button').simulate('click');
    // expect(wrapper.find('.ReactCodeMirror')).toHaveLength(1);
    //const btn = shallow(<button onClick={() => this.addNew("newww text")} className="btn btn-info">Add New</button>);
    const value = 'newww text';
    const onClick = jest.fn();
    const wrapper = shallow(
        <button onClick={() => onClick} className="btn btn-info">Add New</button>
    );

    expect(wrapper).toMatchSnapshot();
        wrapper.find('button').simulate('onClick', {
        target: { value },
    });
    // expect(onClick).toBeCalledWith(value);
});    