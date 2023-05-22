/* This configuration sets up the Redux store with the balance reducer as the only reducer. The 'balance' key is used to access the state managed by the balance reducer. This store can be used to manage the application's state and handle actions dispatched to modify the balance. */

/* Importing necessary functions from the Redux Toolkit */
import { configureStore } from '@reduxjs/toolkit'

/* Importing the balance reducer from './balance' file */
import balanceReducer from './balance'

/* Configuring the Redux store */
export default configureStore({
/* Registering the balance reducer under the 'balance' key */
    reducer: {
        balance: balanceReducer,
    }
})

