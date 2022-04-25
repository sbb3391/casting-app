import { CASTINGS_ACTION_TYPES } from "./castings.types";

export const CASTINGS_INITIAL_STATE = {
    castings: [],
    isLoading: false,
    error: null
};

export const castingsReducer = (state=CASTINGS_INITIAL_STATE, action={}) => {

    const { type, payload } = action;

    switch(type) {
        case CASTINGS_ACTION_TYPES.GET_CASTINGS_START:
            return { ...state, isLoading: true };
        case CASTINGS_ACTION_TYPES.GET_CASTINGS_SUCCESS:
            return { ...state, castings: payload, isLoading: false };
        case CASTINGS_ACTION_TYPES.GET_CASTINGS_FAILED:
            return { ...state, error: payload, isLoading: false };
        default: return state;
    }
}