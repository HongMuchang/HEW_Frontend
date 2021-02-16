import { configureStore } from '@reduxjs/toolkit'
import helloReducer from '../src/features/hello/helloSlice'
import bordSlice from '../src/features/bord/bordSlice'
export default configureStore({
  reducer: {
    hello: helloReducer,
    bord: bordSlice,
  },
})
