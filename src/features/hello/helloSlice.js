import { createSlice } from '@reduxjs/toolkit';

export const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    hello: "helloworld",
  },
  reducers: {
    check: (state) => { state.hello = 'アンニョン' },
    go: (state) => { state.hello = 'check' },
  },
});

export const {
  check,
  go
} = helloSlice.actions;

export const selectHello = state => state.hello.hello;

export default helloSlice.reducer;
