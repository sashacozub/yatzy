import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from './features/scoreboard/scoreboardSlice';
import playareaReducer from './features/playarea/playareaSlice';

export const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
    playarea: playareaReducer,
  },
});
