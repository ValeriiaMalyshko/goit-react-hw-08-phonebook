import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactsSlice';
import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/filter');

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);
