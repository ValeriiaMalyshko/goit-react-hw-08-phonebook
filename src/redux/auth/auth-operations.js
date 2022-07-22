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

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    alert(error.message);
    // return error.message;
  }
});

export const logIn = createAsyncThunk('/auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    alert(error.message);
    // return error.message;
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    alert(error.message);
    // return error.message;
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      alert(error.message);
      // return error.message;
    }
  }
);
// const operations = {
//   register,
//   logOut,
//   logIn,
//   getCurrentUser,
// };
// export default operations;
