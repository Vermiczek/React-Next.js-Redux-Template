import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    screen: 0,
    list: null,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setScreen: (state, action) => {
      state.screen = action.payload;
      console.log(state.screen);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setScreen } = counterSlice.actions;
export const selectList = (state: any) => state.counter.list;

export default counterSlice.reducer;
