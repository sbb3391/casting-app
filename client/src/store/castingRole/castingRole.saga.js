import { takeLatest, all, call, put } from 'redux-saga/effects';
import { fetchCastingRole } from '../../utils/backendFetches/castingRole/castingRole.fetches';

import { 
    getCastingRoleSuccess,
    getCastingRoleFailed
} from './castingRole.action'



import { CASTING_ROLE_ACTION_TYPES } from './castingRole.types';

export function* getCastingRoleAsync( {payload}) {
    try {
        const casting = yield call(fetchCastingRole, payload)
        
        yield put(getCastingRoleSuccess(casting));
    } catch (error) {
      yield put(getCastingRoleFailed(error));
    }
}

export function* onGetCastingRole() {
    yield takeLatest(
        CASTING_ROLE_ACTION_TYPES.GET_CASTING_ROLE_START,
        getCastingRoleAsync
    );
}

export function* castingRoleSaga() {
    yield all([call(onGetCastingRole)]);
}