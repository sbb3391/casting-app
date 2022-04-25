import { takeLatest, all, call, put } from 'redux-saga/effects';
import { fetchAllCastings } from '../../utils/backendFetches/castings/castings';

import { 
    getCastingsSuccess,
    getCastingsFailed
} from './castings.action'



import { CASTINGS_ACTION_TYPES } from './castings.types';

export function* getCastingsAsync() {
    try {
        const castings = yield call(fetchAllCastings)
        
        yield put(getCastingsSuccess(castings));
    } catch (error) {
      yield put(getCastingsFailed(error));
    }
}

export function* onGetCastings() {
    yield takeLatest(
        CASTINGS_ACTION_TYPES.GET_CASTINGS_START,
        getCastingsAsync
    );
}

export function* castingsSaga() {
    yield all([call(onGetCastings)]);
}
