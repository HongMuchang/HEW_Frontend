import { createSlice } from '@reduxjs/toolkit'
// import { RootState } from '../../store'

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
  },
})

export const { login, logout } = userSlice.actions

//ユーザのstateを返す関数
//最後のuserはreducerの任意の名前と一致させる
export const selectUser = (state) => state.user.user

//storeで読み込ませる
export default userSlice.reducer
