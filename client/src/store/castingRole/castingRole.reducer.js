import { CASTING_ROLE_ACTION_TYPES } from "./castingRole.types";

export const CASTING_ROLE_INITIAL_STATE = {
    castingRole: {},
    isLoading: false,
    error: null
};

export const castingRoleReducer = (state=CASTING_ROLE_INITIAL_STATE, action={}) => {

    const { type, payload } = action;

    switch(type) {
        case CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_START:
            return { ...state, isLoading: true };
        case CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_SUCCESS:
            return { ...state, castingRole: payload, isLoading: false };
        case CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_FAILED:
            return { ...state, error: payload, isLoading: false };
        default: return state;
    }
}