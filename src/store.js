import { configureStore } from '@reduxjs/toolkit'
import helloReducer from '../src/features/hello/helloSlice'

export default configureStore({
  reducer: {
    hello: helloReducer,
  },
})
