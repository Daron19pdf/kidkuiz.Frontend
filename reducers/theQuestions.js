import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'theQuestions',

  initialState: {
    value: { questions: [], score: 0, number: 0, checks: [] },
  },
  
  reducers: {
    addQuizzToStore: (state, action) => {
      state.value.number = action.payload;
    },
  },
});

export const { addQuizzToStore} = questionsSlice.actions;
export default questionsSlice.reducer;