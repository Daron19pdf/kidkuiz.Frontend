
import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
 name: 'scoring',

  initialState : {
   value: 0,
  },
 reducers: {
    scoreToStore: (state, action) => {
     state.value = action.payload;
   },
  },
});

export const { scoreToStore } = scoreSlice.actions;
export default scoreSlice.reducer;