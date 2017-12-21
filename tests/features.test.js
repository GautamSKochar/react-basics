import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Featured from '../components/Features';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });

test('Feature Component Should render as expected', () => {
    const key = 1;
    const value = 'newww text';
    const dummyFun = function () {
        console.log("dummy method called");
    }
    const component = shallow(<Featured key={key} index={1}
        updateCommentText={dummyFun}
        deleteFromBoard={dummyFun}>{value}</Featured>);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();

});

test('onEdit click event', () => {
    const dummyFun = function () {
        console.log("dummy method called");
    }
    const component = mount(<Featured key={1} index={1}
        updateCommentText={dummyFun}
        deleteFromBoard={dummyFun}>{"value"}</Featured>);
    // console.log("cmpt is:",toJson(component));
    const btn = component.find('#editBtn');
    console.log("btn props are:", btn.props());
    console.log(component.state());    
    btn.simulate('click');
    console.log(component.state());
    expect(component.state().editing).toEqual(true);
});