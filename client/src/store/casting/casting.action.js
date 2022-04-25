import { CASTING_ACTION_TYPES } from './casting.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const getCastingStart = (castingId) => 
    createAction(CASTING_ACTION_TYPES.GET_CASTING_START, castingId)


export const getCastingSuccess = (casting) => {
    return createAction(CASTING_ACTION_TYPES.GET_CASTING_SUCCESS,
    casting
    );
}

export const getCastingFailed = (error) => 
    createAction(CASTING_ACTION_TYPES.GET_CASTING_FAILED, error);


export const toggleEditImage = (editImageBool) => 
    createAction(CASTING_ACTION_TYPES.TOGGLE_EDIT_IMAGE, editImageBool);

export const removeCastingRoleFromCasting = (castingRoleId) => {
    return createAction(CASTING_ACTION_TYPES.REMOVE_CASTING_ROLE_FROM_CASTING, castingRoleId);
}

export const addCastingRoleToCasting = (castingRole) => {
    return createAction(CASTING_ACTION_TYPES.ADD_CASTING_ROLE_TO_CASTING, castingRole);
}

export const updateCasting = (update) => {
    return createAction(CASTING_ACTION_TYPES.UPDATE_CASTING, update)
}