import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userList from './reducers/userListReducer';
import activeUser from './reducers/activeUserReducer';
import comments from './reducers/commentsReducer';
import products from './reducers/productsReducer';

const persistedState = {
    comments: ['hiiiiiiiiiii']
};

let middleware = applyMiddleware(logger, thunk, promise());

if (process.env.NODE_ENV !== 'production') {
    middleware = compose(middleware, window.devToolsExtension ? (window.devToolsExtension && window.devToolsExtension()) : compose)
}

export default createStore(
    combineReducers({
        math,
        user,
        userList,
        activeUser,
        comments, persistedState,
        products
    }),
    {},
    middleware
);