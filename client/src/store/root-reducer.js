import { combineReducers } from 'redux';

import { castingsReducer } from './castings/castings.reducer';
import { castingRoleReducer } from './castingRole/castingRole.reducer'
import { castingReducer } from './casting/casting.reducer';

export const rootReducer = combineReducers({
    casting: castingReducer,
    castings: castingsReducer,
    castingRole: castingRoleReducer
});