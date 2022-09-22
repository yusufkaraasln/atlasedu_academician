import {configureStore} from '@reduxjs/toolkit'
import settingsReducer from './settingsReducer'
export const store = configureStore({
    reducer: {
        settings: settingsReducer,
       
    },
})

