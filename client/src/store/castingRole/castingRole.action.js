import { CASTING_ROLE_ACTION_TYPES } from './castingRole.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const getCastingRoleStart = (castingRoleId) => 
    createAction(CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_START, castingRoleId);


export const getCastingRoleSuccess = (castingRole) => {

    return createAction(CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_SUCCESS,
    castingRole
    );
}


export const getCastingRoleFailed = (error) => 
    createAction(CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_FAILED, error);