import { createSlice } from '@reduxjs/toolkit';

import { combinations } from '../../utils';
import { scoreTable } from './scoreTable';

const initialState = {
  scoreboard: {
    scoreTable,
  },
};

export const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {},
});

// export const {increment, decrement, etc} = counterSlice.actions

export default scoreboardSlice.reducer;
