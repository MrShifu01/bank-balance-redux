import { createSlice } from '@reduxjs/toolkit'

// Create a new slice for managing balance state
export const balanceSlice = createSlice({

    // Specify the name of the slice
    name: "balance",

    // Set the initial state
    initialState: {
        value: 1000
    },

    // Define reducers to update the state
    reducers: {
        increaseByDeposit: (state, action) => {
            state.value += action.payload
        },

        decreaseByWithdraw: (state, action) => {
            state.value -= action.payload
        },

        increaseByInterest: (state) => {
            state.value = state.value + (0.05 * state.value)
        },

        decreaseByCharges: (state) => {
            state.value = state.value - (0.15 * state.value)
        }
    }
})

// Extract the action creators from the slice
export const { increaseByDeposit, increaseByInterest, decreaseByWithdraw, decreaseByCharges } = balanceSlice.actions

// Export the reducer function
export default balanceSlice.reducer
