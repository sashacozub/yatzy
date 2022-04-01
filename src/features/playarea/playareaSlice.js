import { createSlice } from '@reduxjs/toolkit';

import { allDice } from '../../utils';

const initialState = {
  dice: {
    allDice,
  },
};

export const playareaSlice = createSlice({
  name: 'playarea',
  initialState,
  reducers: {},
});

export default playareaSlice.reducer;
