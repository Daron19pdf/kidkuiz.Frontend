import { createSlice } from '@reduxjs/toolkit';

export const checkSlice = createSlice({
  name: 'checkQuiz',

  initialState: {
    value: {checks: []} ,
  },
  
  reducers: {
    addCheckToStore: (state, action) => {
      const { index, checked } = action.payload;
      if (index === undefined ) {
        state.value.checks ;
      } else {
      state.value.checks.push({ index, checked });
   }}, 
  },
});

export const { addCheckToStore } = checkSlice.actions;
export default checkSlice.reducer;