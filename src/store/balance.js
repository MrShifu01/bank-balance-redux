import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
    
    name: "balance",

    initialState: {
        value: 1000
    },

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

export const { increaseByDeposit, increaseByInterest, decreaseByWithdraw, decreaseByCharges } = balanceSlice.actions

export default balanceSlice.reducer