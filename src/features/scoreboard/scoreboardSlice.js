import { createSlice } from '@reduxjs/toolkit';

const combinations = {
  ones: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  bonus: 0,
  pair: 0,
  twoPairs: 0,
  threeOfKind: 0,
  fourOfKind: 0,
  fullHouse: 0,
  smStraight: 0,
  lgStraight: 0,
  chance: 0,
  yatzy: 0,
};

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
