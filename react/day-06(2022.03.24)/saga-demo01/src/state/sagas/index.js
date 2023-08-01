// 合并 saga
import { all } from "redux-saga/effects";
import packageSaga from "./searchSaga";

export default function* sagas() {
    yield all([packageSaga()]);
}