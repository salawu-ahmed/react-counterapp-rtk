import { createSlice } from "@reduxjs/toolkit";
// a slice comprises of your state actions and reducers

export const counterSlice = createSlice({
    name: 'counter', // this is the name of this slice
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        resetCounter: (state) => {
            state.count = 0
        }
    }
})

export const { increment, decrement, incrementByAmount, resetCounter } = counterSlice.actions

export default counterSlice.reducer
