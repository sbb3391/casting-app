import { all, call } from 'redux-saga/effects';

import { castingsSaga } from './castings/castings.saga';
import { castingRoleSaga } from './castingRole/castingRole.saga';
import { castingSaga } from './casting/casting.saga';

export function* rootSaga() {
  yield all([call(castingsSaga), call(castingSaga), call(castingRoleSaga)]);
}