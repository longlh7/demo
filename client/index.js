// React
import React from 'react'
import { render } from 'react-dom'
// Redux
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// Component
import App from './components/App'
import { config } from './config/env'
// Reducer
import reducer from './reducers'
// Socket.io
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client';

// Config socket
console.log('ENV: ', config.getEnv());
let socket = io(config.getEnv());
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const store = createStore(
    reducer,
    compose(applyMiddleware(
        thunk,
        socketIoMiddleware
    ))
)

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
