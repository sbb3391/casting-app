import { createSelector } from 'reselect';

const selectCastingReducer = (state) => state.casting;

export const selectCasting = createSelector(
  [selectCastingReducer],
  (castingSlice) => castingSlice.casting
);

export const isLoading = createSelector(
  [selectCastingReducer],
  (castingSlice) => castingSlice.isLoading
)

export const selectEditImage = createSelector(
  [selectCastingReducer],
  (castingSlice) => castingSlice.editImage
)

export const selectCastingEdit = createSelector(
  [selectCastingReducer],
  (castingSlice) => castingSlice.castingEdit
)