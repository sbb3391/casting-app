import { createSelector } from 'reselect';

const selectCastingRoleReducer = (state) => state.castingRole;

export const selectCastingRole = createSelector(
  [selectCastingRoleReducer],
  (castingRoleSlice) => castingRoleSlice.castingRole
);

export const isLoading = createSelector(
  [selectCastingRoleReducer],
  (castingRoleSlice) => castingRoleSlice.isLoading
)