import { createSlice } from '@reduxjs/toolkit';

import { allDice } from '../../utils';

const initialState = {
  dice: allDice,
};

export const playareaSlice = createSlice({
  name: 'playarea',
  initialState,
  reducers: {
    setDice: (state, action) => {
      state.dice = action.payload;
    },
  },
});

export const { setDice } = playareaSlice.actions;

export default playareaSlice.reducer;
