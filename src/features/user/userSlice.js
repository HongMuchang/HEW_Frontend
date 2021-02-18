import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { uid: '', photoUrl: '', displayName: '' },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = { uid: '', photoUrl: '', displayName: '' }
    },
    selectUser: (state) => state.user.uid,
  },
})

export const { login, logout, selectUser } = userSlice.actions

export default userSlice.reducer
