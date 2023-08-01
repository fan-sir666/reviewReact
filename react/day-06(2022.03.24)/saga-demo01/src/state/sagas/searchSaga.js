import axios from 'axios'
import { put, takeEvery } from "redux-saga/effects"
import { search_packages_error, search_packages_success } from '../action-creator';
import { SEARCH_START } from '../action-types/appActionType';

function* searchPackages(action) {
    try {
        const { data } = yield axios.get(`https://registry.npmjs.org/-/v1/search`, {
            params: {
                text: action.payload,
            },
        });
        yield put(
            search_packages_success(data.objects.map((item) => item.package.name))
        );
    } catch (error) {
        yield put(search_packages_error(error));
    }
}

export default function* packageSaga() {
    yield takeEvery(SEARCH_START, searchPackages)
}