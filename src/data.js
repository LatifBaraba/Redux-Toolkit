import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export function fetchRandom() {
    return async (dispatch) => {
        dispatch(getRandom())
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any')
            const result = await response.json()
            dispatch(getRandomSuccess(result))
        } catch (error) {
            dispatch(getRandomFailure())
        }
    }
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getRandom: (state) => {
            state.loading = true
        },
        getRandomSuccess: (state, { payload }) => {
            state.data = payload
            state.loading = false
        },
        getRandomFailure: (state) => {
            state.loading = false
        },
    },
})

export const { getRandom, getRandomSuccess, getRandomFailure } = user.actions

export default user.reducer
