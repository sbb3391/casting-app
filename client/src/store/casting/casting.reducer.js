import { CASTING_ACTION_TYPES } from "./casting.types";

export const CASTING_INITIAL_STATE = {
    casting: {},
    castingEdit: {},
    isLoading: false,
    error: null,
    editImage: false
};

export const castingReducer = (state=CASTING_INITIAL_STATE, action={}) => {

    const { type, payload } = action;
    let cr, indexToRemove, newCastingRoles

    switch(type) {
        case CASTING_ACTION_TYPES.GET_CASTING_START:
            return { ...state, isLoading: true };
        case CASTING_ACTION_TYPES.GET_CASTING_SUCCESS:
            return { ...state, casting: payload, castingEdit: payload, isLoading: false };
        case CASTING_ACTION_TYPES.GET_CASTING_FAILED:
            return { ...state, error: payload, isLoading: false };
        case CASTING_ACTION_TYPES.TOGGLE_EDIT_IMAGE:
            return {...state, editImage: payload}
        case CASTING_ACTION_TYPES.REMOVE_CASTING_ROLE_FROM_CASTING:
            cr = state.castingEdit.castingRoles.find( c => c._id === payload)
            indexToRemove = state.castingEdit.castingRoles.indexOf(cr)
            newCastingRoles = [...state.castingEdit.castingRoles.slice(0, indexToRemove), ...state.castingEdit.castingRoles.slice(indexToRemove + 1)]
            return {
                ...state,
                casting: {
                    ...state.casting,
                    castingRoles: newCastingRoles
                },
                castingEdit: {
                    ...state.castingEdit,
                    castingRoles: newCastingRoles          
                }
            }
        case CASTING_ACTION_TYPES.ADD_CASTING_ROLE_TO_CASTING:  
            newCastingRoles = [...state.castingEdit.castingRoles, payload]
            return {
                ...state,
                casting: {
                    ...state.casting,
                    castingRoles: newCastingRoles
                },
                castingEdit: {
                    ...state.castingEdit,
                    castingRoles: newCastingRoles          
                }
            }
        case CASTING_ACTION_TYPES.UPDATE_CASTING:
            return {...state, casting: payload, castingEdit: payload}
        default: return state;
    }
}