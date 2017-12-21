import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userList from './reducers/userListReducer';
import activeUser from './reducers/activeUserReducer';
import comments from './reducers/commentsReducer';

const persistedState ={
    comments: ['hiiiiiiiiiii']
};

export default createStore(
    combineReducers({
        math,
        user,
        userList,
        activeUser,
        comments,persistedState
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);