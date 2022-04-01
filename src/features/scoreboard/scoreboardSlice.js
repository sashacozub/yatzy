import { createSlice } from '@reduxjs/toolkit';

import { combinations } from '../../utils';

const initialState = {
  scoreboard: {
    playerOne: {
      name: '',
      currentScore: 0,
      combinations,
    },
    playerTwo: {
      name: '',
      currentScore: 0,
      combinations,
    },
  },
};

export const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {},
});

// export const {increment, decrement, etc} = counterSlice.actions

export default scoreboardSlice.reducer;
