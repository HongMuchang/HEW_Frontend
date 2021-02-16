import { configureStore } from '@reduxjs/toolkit'
import bordReducer from './features/bord/bordSlice'
import counterReducer from './features/counter/counterSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    bord: bordReducer,
  },
})
