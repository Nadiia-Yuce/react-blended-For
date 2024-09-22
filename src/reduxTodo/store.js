import { configureStore } from '@reduxjs/toolkit';
import { slice } from './todoSlice';

export const store = configureStore({
  reducer: { [slice.name]: slice.reducer },
});
