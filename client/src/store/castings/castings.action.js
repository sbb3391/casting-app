import { CASTINGS_ACTION_TYPES } from './castings.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const getCastingsStart = () => 
    createAction(CASTINGS_ACTION_TYPES.GET_CASTINGS_START)


export const getCastingsSuccess = (castingsArray) => {

    return createAction(CASTINGS_ACTION_TYPES.GET_CASTINGS_SUCCESS,
    castingsArray
    );
}


export const getCastingsFailed = (error) => 
    createAction(CASTINGS_ACTION_TYPES.GET_CASTINGS_FAILED, error);