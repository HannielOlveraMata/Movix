import { configureStore } from '@reduxjs/toolkit'
import CeluSlice from './CeluSlice'

export const store = configureStore({
    reducer: {
        celSlice: CeluSlice,
    },
})