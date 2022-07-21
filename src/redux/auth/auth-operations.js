import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return error.message;
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  try {
    const response = await axios.get('/users/current');

    return response.data;
  } catch (error) {
    return error.message;
  }
});

export default { register, logOut, logIn, getCurrentUser };
