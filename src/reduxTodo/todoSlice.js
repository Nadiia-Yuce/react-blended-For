import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todoOps';

export const slice = createSlice({
  name: 'todos',
  initialState: { items: [], loading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
  selectors: {
    selectTodos: state => state.items,
    selectIsLoading: state => state.loading,
    selectError: state => state.error,
  },
});

export const { selectTodos, selectIsLoading, selectError } = slice.selectors;
