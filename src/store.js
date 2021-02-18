import { configureStore } from '@reduxjs/toolkit'
import bordReducer from './features/bord/bordSlice'
import userrReducer from './features/user/userSlice'
export default configureStore({
  reducer: {
    user: userrReducer,
    bord: bordReducer,
  },
})
