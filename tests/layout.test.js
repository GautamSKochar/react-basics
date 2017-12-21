import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });


it('Layout component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
});
