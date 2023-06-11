import {takeEvery} from 'redux-saga/effects'
import {GET_POSTS, getAllPostsSaga} from './postsSaga.ts'

export function* index() {
	yield takeEvery(GET_POSTS, getAllPostsSaga)
}