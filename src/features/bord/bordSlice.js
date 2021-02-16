import { createSlice } from '@reduxjs/toolkit'

export const bordSlice = createSlice({
  name: 'bord',
  initialState: {
    bordCount: 3,
    bords: [
      {
        id: 1,
        master_id: 1,
        title: 'lll',
        event_day: '2020-12-31',
        day: 5,
        origanizer: 'TechBowl',
        commit: 1,
        Beginer: 1,
        reword: 1,
        meg: 'よろしくお願いします',
        position: 1,
      },
      {
        id: 2,
        master_id: 2,
        title: 'lll',
        event_day: '2020-12-31',
        day: 5,
        origanizer: 'TechBowl',
        commit: 1,
        Beginer: 1,
        reword: 1,
        meg: 'よろしくお願いします',
        position: 1,
      },
    ],
    selectedBords: {
      id: 1,
      title: 'こんいちは',
    },
  },
  reducers: {
    check: (state) => {
      state.hello = 'アンニョン'
    },
    go: (state) => {
      state.hello = 'check'
    },
  },
})

export const { check, go } = bordSlice.actions

export default bordSlice.reducer
