import { configureStore } from '@reduxjs/toolkit'
// import api from '../services/api'

export const store = configureStore({
  reducer: {}
})

export type RootReducer = ReturnType<typeof store.getState>
