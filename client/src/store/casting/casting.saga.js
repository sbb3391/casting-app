import { takeLatest, all, call, put } from 'redux-saga/effects';
import { fetchCasting } from '../../utils/backendFetches/casting/casting.fetches';

import { 
    getCastingSuccess,
    getCastingFailed
} from './casting.action'



import { CASTING_ACTION_TYPES } from './casting.types';

export function* getCastingAsync({ payload }) {
    try {
        const casting = yield call(fetchCasting, payload)
        
        yield put(getCastingSuccess(casting));
    } catch (error) {
      yield put(getCastingFailed(error));
    }
}

export function* onGetCasting() {
    yield takeLatest(
        CASTING_ACTION_TYPES.GET_CASTING_START,
        getCastingAsync
    );
}

export function* castingSaga() {
    yield all([call(onGetCasting)]);
}
