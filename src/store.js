import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from './features/scoreboard/scoreboardSlice';

export const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
  },
});
