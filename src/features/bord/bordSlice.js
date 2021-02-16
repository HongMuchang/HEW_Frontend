import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
  },
  create_bord: {
    id: 1,
    master_id: 1,
    title: '',
    event_day: '2020-12-31',
    day: 5,
    origanizer: 'TechBowl',
    commit: 1,
    Beginer: 1,
    reword: 1,
    meg: 'よろしくお願いします',
    position: 1,
  },
}

export const bordSlice = createSlice({
  name: 'bord',
  initialState,
  reducers: {
    createdbord: (state, action) => {
      console.log(action)
      const bord = state.create_bord
      bord.id = action.payload.id
      bord.title = action.payload.title
      bord.commit = action.payload.commit
      bord.origanizer = action.payload.origanizer
    },
    check: (state, action) => {
      state.bordCount += action.payload
    },
  },
})
export const selectbords = (state) => state.bord.bordCount

export const { createdbord, check } = bordSlice.actions

export default bordSlice.reducer
