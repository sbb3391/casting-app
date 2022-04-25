import { createSelector } from 'reselect';

const selectCastingsReducer = (state) => state.castings;

export const selectCastings = createSelector(
  [selectCastingsReducer],
  (castingsSlice) => castingsSlice.castings
);

export const isLoading = createSelector(
  [selectCastingsReducer],
  (castingsSlice) => castingsSlice.isLoading
)