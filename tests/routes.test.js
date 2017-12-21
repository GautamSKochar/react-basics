import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import Home from '../components/Home';
import About from '../components/About';
import Featured from '../components/Features';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

configure({ adapter: new Adapter() });

test('Shoud render home component when visiting /', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Routes />
        </MemoryRouter>
    );
    expect(component.find(Home).length).toBe(1);
});

test('Shoud render about component when visiting /about', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/about']} initialIndex={0}>
            <Routes />
        </MemoryRouter>
    );
    expect(component.find(About).length).toBe(1);
});