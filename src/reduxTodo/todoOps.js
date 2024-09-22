import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/api';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/todos');
      return response.data;
    } catch (error) {
      //   return thunkAPI.rejectWithValue(error.message);
      return thunkAPI.rejectWithValue('Oops... Something went wrong..');
    }
  },
);
