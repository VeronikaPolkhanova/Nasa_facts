import { put, takeEvery } from 'redux-saga/effects';

async function loadImages() {
    const data = await fetch("https://api.nasa.gov/planetary/apod?api_key=wJqT1ITkX3mMFsI0qk2bTWNVmaXaKwmtdIbOkXAw&count=50").then(json => json.json());
    return data.filter(it => it.media_type !== 'video')
}

export function* workerSaga() {
    const data = yield loadImages();
    yield put({ type: 'SET_IMAGES', payload: data })
}

export function* watchSaga() {
    yield takeEvery('LOAD', workerSaga)
}

export default function* rootSaga() {
    yield watchSaga();
}