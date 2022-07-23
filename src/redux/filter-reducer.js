import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/filter');

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
