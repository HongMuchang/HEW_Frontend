import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bordCount: 0,
  bords: [],
  selectedBords: {
    id: 0,
  },
  create_bord: {
    master_id: 0,
    title: '',
    event_day: '2021-01-01',
    day: 0,
    origanizer: '',
    commit: 1,
    Beginer: 1,
    reword: 1,
    msg: '',
    position: 1,
    slackUrl: '',
    members: [
      { uid: 'sadadsadsasa', position: '1' },
      { uid: 'sadadsadsasa', position: '1' },
      { uid: 'sadadsadsasa', position: '1' },
      { uid: 'sadadsadsasa', position: '1' },
    ],
  },
}

export const bordSlice = createSlice({
  name: 'bord',
  initialState,
  reducers: {
    //募集するボードの状態
    createBord: (state, action) => {
      const bord = state.create_bord
      bord.master_id = action.payload.master_id
      bord.title = action.payload.title
      bord.totalMember = action.payload.totalMember
      bord.day = action.payload.day
      bord.event_day = action.payload.event_day
      bord.origanizer = action.payload.origanizer
      bord.commit = action.payload.commit
      bord.Beginer = action.payload.Beginer
      bord.reword = action.payload.reword
      bord.msg = action.payload.msg
      bord.slackUrl = action.payload.slackUrl
      bord.position = action.payload.position
    },

    //bordCountsの値
    getBordCounts: (state, action) => {
      state.bordCount += action.payload
    },

    //bordsに追加
    pushBord: (state, action) => {
      state.bords.unshift(action.payload)
    },

    //リセット
    resetBord: (state) => {
      const bord = state.create_bord
      bord.title = ''
      bord.master_id = ''
      bord.day = ''
      bord.event_day = '2021-01-01'
      bord.origanizer = ''
      bord.commit = 'null'
      bord.Beginer = 'null'
      bord.reword = ''
      bord.msg = ''
      bord.position = 'frontend'
      bord.slackUrl = ''
    },
  },
})
export const selectbords = (state) => state.bord.bordCount

export const { createBord, getBordCounts, pushBord, resetBord } = bordSlice.actions

export default bordSlice.reducer
