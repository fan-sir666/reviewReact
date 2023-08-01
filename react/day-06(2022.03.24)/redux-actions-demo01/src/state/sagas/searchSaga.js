import axios from 'axios'

import { put, takeEvery } from 'redux-saga/effects'
import { searchError, searchStart, searchSuccess } from '../action-creator'

function* searchPackages(action) {
    try {
        const { data } = yield axios.get(`https://registry.npmjs.org/-/v1/search`, {
            params: {
                text: action.payload,
            },
        });
        yield put(searchSuccess(data.objects.map((item) => item.package.name)))
    } catch (error) {
        yield put(searchError(error))
    }
}


export default function* packageSaga() {
    yield takeEvery(searchStart, searchPackages)
}