import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, getCurrentUser } from './auth-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialUserState,

  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [getCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

// export default authSlice.reducer;
