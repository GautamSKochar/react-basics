import React from 'react';
import { shallow, mount, render } from 'enzyme';
import userReducer from '../../reducers/userReducer';
import reducer from '../../reducers/activeUserReducer';
import * as actions from '../../actions/userActions';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });

describe('User Reducer', () => {


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(null)
    }),
    it('should return userReducer\'s initial state', () => {
        expect(userReducer(undefined, {})).toEqual(
            {
                name: "Gautam",
                age: 25
            }
        )
    }),
    it('should handle SET_AGE', () =>{
        expect(
            reducer({
                name: 'Gautam',
                age: 28
            }, {
              type: 'SET_AGE',
              payload: 28
            })
          ).toEqual(
            {
              name: 'Gautam',
              age: 28
            }
          )
    })
    
})

describe('actions', () => {
    it('should create an action to set name', () => {
      const age = 28
      const expectedAction = {
        type: 'SET_AGE',
        payload: age
      }
      expect(actions.setAge(age)).toEqual(expectedAction)
    })
  })