import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import userReducers from './data'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducers,
    },
    middleware: [thunk],
})
