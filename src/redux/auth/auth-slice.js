import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, getCurrentUser } from './auth-operations';

const initialUserState = {
  accessToken: null,
  refreshToken: null,
  profile: { name: null, email: null },
  token: null,
  isLoginLoading: false,
  isProfileLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewCredentials(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logIn.pending, state => {
        state.isLoginLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoginLoading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoginLoading = false;
      })
      .addCase(getProfileThunk.pending, state => {
        state.isProfileLoading = true;
      })
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isProfileLoading = false;
        state.error = null;
      })
      .addCase(getProfileThunk.rejected, (state, { payload }) => {
        state.isProfileLoading = false;
      });
  },
});

const { setNewCredentials } = authSlice.actions;

export default authSlice.reducer;
